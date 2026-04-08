# Asset Inventory

This inventory lists the live asset groups currently used by the site under `public/site`.

Goal:

- replace unknown or inherited assets with your own
- keep file paths stable to avoid any behavior change

## Usage Rule

For safe replacement without changing behavior:

- keep the same file path
- keep the same file name unless every reference is updated
- keep the same file extension
- keep roughly the same dimensions and aspect ratio

## Live Asset Groups

### Images

Live image files are served from:

- `public/site/assets/vendor/images`

Representative files referenced by the live pages and runtime include:

- `04vJJZ3D2ponPv6rzLBq6sf2PZU.svg`
- `5BVUI56YoqDFZ1xvzbir5lf9sZA.svg`
- `KpbhecEzWQ4dFSutqcW3lQOGNk.png`
- `2brzgXS5fJHHMvAH83vgl5m8KTI.jpg`
- `46yWpjkwWiKJojGTr2NKnNPtJ1c.jpg`
- `BgsxdPJJZ3faakDHp1W2WcB8CoM.jpg`
- `G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg`
- `mCkhYgyE0LSy9RJ4nVmmGTpAjLA.jpg`
- `W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg`
- `XeoHxv0ErFoyqieN2PppKnGRd2o.jpg`
- `YGV3hSM1KkFRZxZ0JDeOT7ry7u4.jpg`

Status:

- ownership/license unknown unless you have source records

Action:

- mark each image as `owned`, `licensed`, or `unknown`
- replace every `unknown`

### Video

Live video file:

- `public/site/assets/vendor/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4`

Status:

- ownership/license unknown unless you have source records

Action:

- replace with your own MP4 if you do not have clear rights

### Fonts

Live font files are coming from three buckets:

- `public/site/assets/vendor/assets/*.woff2`
- `public/site/assets/vendor/google-fonts/*`
- `public/site/assets/vendor/third-party-assets/fontshare/*`

Observed live families in the pages/runtime:

- `Inter`
- `Inter Display`
- `Instrument Serif`
- `Plus Jakarta Sans`
- `Satoshi`

Status:

- verify the license for each family and source

Action:

- if you want strongest ownership and simplest compliance, replace with fonts you selected and licensed directly

## Priority Order

1. Replace the MP4
2. Replace hero/branding images
3. Replace all remaining photos/illustrations
4. Replace fonts

## Do Not Change Yet

To preserve current behavior, do not rewrite:

- `public/site/assets/vendor/runtime/*`
- DOM structure in `public/site/*.html`

