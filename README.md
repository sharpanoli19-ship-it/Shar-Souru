# a little place called us

A scroll-driven relationship story site for Shar & Souru.

## Before you upload to GitHub

1. Put your 16 photos into the `photos/` folder, named exactly:
   `01.jpg`, `02.jpg`, ... `16.jpg`
   (If your photos are `.jpeg`, `.png`, or `.HEIC`, either convert them to `.jpg`
   first, or open `index.html` and change the matching `src="photos/xx.jpg"`
   to the correct extension — do not just rename the file extension without
   converting, or the image won't load.)

2. (Optional) Add a song. Drop an mp3 into `photos/` (e.g. `photos/our-song.mp3`),
   then in `index.html` uncomment this line inside the `<audio>` tag and point
   it at your file:
   ```html
   <source src="photos/our-song.mp3" type="audio/mpeg">
   ```

3. The countdown/counter in Chapter III calculates itself from `28 June 2026` —
   no manual updates needed, ever.

## Files

- `index.html` — all the content and structure
- `style.css` — all visual styling
- `script.js` — scroll reveals, the counter, easter eggs, sound toggle
- `photos/` — your 16 images (+ optional song)
