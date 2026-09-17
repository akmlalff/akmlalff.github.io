import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const RSS_URL = process.env.LETTERBOXD_RSS_URL || "https://letterboxd.com/akmlalff/rss/";
const OUTPUT_FILE = resolve(process.env.MOVIES_OUTPUT_FILE || "movies/movies.json");

function decodeEntities(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

function tagValue(block, tagName) {
  const escaped = tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "i"));
  return match ? decodeEntities(match[1]).trim() : "";
}

function posterFromDescription(description) {
  const match = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1]?.startsWith("https://") ? match[1] : "";
}

function parseMovies(xml) {
  const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];

  return itemBlocks
    .map(item => ({
      title: tagValue(item, "letterboxd:filmTitle"),
      year: tagValue(item, "letterboxd:filmYear"),
      watchedDate: tagValue(item, "letterboxd:watchedDate"),
      rating: tagValue(item, "letterboxd:memberRating"),
      link: tagValue(item, "link"),
      poster: posterFromDescription(tagValue(item, "description"))
    }))
    .filter(movie => movie.title && movie.year && movie.link && movie.poster);
}

const response = await fetch(RSS_URL, {
  headers: {
    "User-Agent": "akmlalff.github.io movie updater"
  }
});

if (!response.ok) {
  throw new Error(`Letterboxd RSS request failed: ${response.status}`);
}

const xml = await response.text();
const movies = parseMovies(xml);

if (!movies.length) {
  throw new Error("No movies found in Letterboxd RSS feed");
}

const payload = {
  source: RSS_URL,
  movies
};

await mkdir(dirname(OUTPUT_FILE), { recursive: true });
await writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Wrote ${movies.length} movies to ${OUTPUT_FILE}`);
