# Logos

| File                    | Use                                             |
| ----------------------- | ----------------------------------------------- |
| `slab-lockup-ink.svg`   | Mark and wordmark, for light backgrounds        |
| `slab-lockup-paper.svg` | Mark and wordmark, for dark backgrounds         |
| `slab-mark-ink.svg`     | Mark alone, for light backgrounds               |
| `slab-mark-paper.svg`   | Mark alone, for dark backgrounds                |
| `slab-mark-16.svg`      | Mark simplified for 16px, the base for favicons |

"Ink" and "paper" name the color of the artwork, not the background it sits on.

## Construction

The mark is five rectangles on a 12 × 6.6 grid. Courses are 1.8 tall with 0.6
joints. Row one splits 5.7 + 0.6 + 5.7, row two 2.8 + 0.6 + 8.6, and the orange
base runs the full 12. Below 24px, row two becomes one brick.

In the lockup the mark's height equals the wordmark's cap height, so the mark
sits between the baseline and the cap line. The gap between them is 1.5 course
heights, measured to the ink of the "S".

The wordmark is Zilla Slab Regular at −0.02em tracking, converted to outlines.
There's no font dependency, which is why these render correctly on GitHub and
inside Storybook's `<img>`. To change the wordmark, redraw it from the font
rather than editing the paths by hand.

## Favicons

The favicon set is the avatar tile, the reversed mark on ink, generated into
`.storybook/assets` and `site/public` by
`node .github/logos/generate-favicons.js`.

| Source                | Output                                               |
| --------------------- | ---------------------------------------------------- |
| `slab-favicon-16.svg` | `favicon-16.png`, with the small variant of the mark |
| `slab-favicon-32.svg` | `favicon-32.png`                                     |
| `slab-favicon-48.svg` | `favicon-48.png`                                     |
| `slab-favicon.svg`    | `apple-touch-icon.png` (180) and `favicon-512.png`   |

`favicon.ico` holds the 16, 32 and 48 PNGs.

The three small tiles are drawn on whole pixels at their size, with the mark
about 0.64 of the tile's width. `slab-favicon.svg` scales the mark by 1.7,
which puts its edges between pixels: soft at 32px and below, invisible at 180
and 512. For the same reason, pages link the PNGs rather than an SVG, which a
browser would take over all of them, and `slab-favicon.svg` stays out of
`.storybook/assets`, since Storybook links a `favicon.svg` there on its own.
After changing any of the sources, run the script again and commit what it
writes.
