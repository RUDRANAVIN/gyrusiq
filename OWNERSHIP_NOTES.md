# Ownership Notes

Current state:

- The deployed site behavior comes from local files under `public/site`.
- The live app route in `src/main.jsx` loads those pages in an iframe.
- Runtime behavior is currently driven by `public/site/assets/vendor/runtime/*`.

Safe ownership work already done:

- Removed literal `gyrusiq` matches from `src` and `public/site`
- Removed duplicate mirrored export folders not used by the live site
- Kept all runtime files local

Files you can replace later without changing structure first:

- Images in `public/site/assets/vendor/images`
- Video in `public/site/assets/vendor/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4`
- Local font files in:
  - `public/site/assets/vendor/google-fonts`
  - `public/site/assets/vendor/third-party-assets`
  - `public/site/assets/vendor/assets/*.woff2`

Recommended order for stronger ownership:

1. Replace images with your own equivalents
2. Replace the MP4 with your own equivalent
3. Replace fonts with ones you have rights to use
4. Rebuild the site in your own source code if you want to remove dependency on the exported runtime architecture

Do not do this if you want no behavior change:

- rename or rewrite files in `public/site/assets/vendor/runtime`
- change the DOM structure in `public/site/*.html` without testing the runtime
