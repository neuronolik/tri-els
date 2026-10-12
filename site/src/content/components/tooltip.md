---
title: Tooltip
group: Overlays
element: '[role=tooltip]'
tags: [slab-tooltip]
summary: 'A short description that shows up beside an element on hover and focus.'
example: |
  <slab-styled-tooltip placement="right">
    <button class="styled-button styled-button--icon" slot="anchor" type="button" aria-label="About slump">?</button>
    <span>Slump is how far a cone of fresh concrete sags. 4 inches is typical for a slab.</span>
  </slab-styled-tooltip>
usage: |
  <slab-tooltip>
    <button slot="anchor">Save</button>
    <span>Saves a copy to your account</span>
  </slab-tooltip>
---

## Keyboard

| Key    | What it does                                                                  |
| ------ | ----------------------------------------------------------------------------- |
| Tab    | Focusing the anchor opens the tooltip at once. Leaving it closes the tooltip. |
| Escape | Closes the tooltip.                                                           |
