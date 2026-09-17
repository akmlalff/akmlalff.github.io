import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const RSS_URL = process.env.GOODREADS_RSS_URL || "https://www.goodreads.com/review/list_rss/118685087";
const OUTPUT_FILE = resolve(process.env.BOOKS_OUTPUT_FILE || "books/books.json");

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

function normalizeImage(url) {
  return url.startsWith("https://") ? url : "";
}

function parseBooks(xml) {
  const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];

  return itemBlocks
    .map(item => ({
      title: tagValue(item, "title"),
      author: tagValue(item, "author_name"),
      year: tagValue(item, "book_published"),
      rating: tagValue(item, "user_rating"),
      averageRating: tagValue(item, "average_rating"),
      link: tagValue(item, "link"),
      cover: normalizeImage(
        tagValue(item, "book_large_image_url") ||
        tagValue(item, "book_medium_image_url") ||
        tagValue(item, "book_image_url")
      )
    }))
    .filter(book => book.title && book.author && book.link && book.cover);
}

const response = await fetch(RSS_URL, {
  headers: {
    "User-Agent": "akmlalff.github.io book updater"
  }
});

if (!response.ok) {
  throw new Error(`Goodreads RSS request failed: ${response.status}`);
}

const xml = await response.text();
const books = parseBooks(xml);

if (!books.length) {
  throw new Error("No books found in Goodreads RSS feed");
}

const payload = {
  source: RSS_URL,
  books
};

await mkdir(dirname(OUTPUT_FILE), { recursive: true });
await writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Wrote ${books.length} books to ${OUTPUT_FILE}`);
