# Akmal's CTF Writeups

A GitHub Pages-ready CTF writeup blog inspired by a dark Chirpy-style layout.

## Preview Locally

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publish On GitHub Pages

1. Push this repo to GitHub.
2. Open the repo settings.
3. Go to Pages.
4. Set the source to `Deploy from a branch`.
5. Choose `main` and `/root`.

## Imported Writeups

This site currently includes 43 imported CTF writeup pages from `CTF-Writeups-main.zip`.

- Markdown writeups were converted to native HTML pages.
- Markdown images were copied into `assets/writeups/`.
- PDF writeups were copied into `assets/writeups/` and embedded in their own blog pages.

## Add A Writeup

1. Duplicate one file in `posts/`.
2. Update the title, date, tags, and article body.
3. Add a matching entry in `script.js`.
4. Add or reuse a cover image in `assets/`.

The home page, recent list, CTF category dropdown, tags, archives, and search are generated from `posts-data.js` and `script.js`.
