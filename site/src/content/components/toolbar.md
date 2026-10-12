---
title: Toolbar
group: Navigation
element: '[role=toolbar]'
tags: [slab-toolbar]
summary: 'A group of controls that Tab reaches once, with the arrow keys to move between them.'
example: |
  <slab-styled-toolbar label="Finish">
    <button aria-pressed="true" type="button">Broom</button>
    <button aria-pressed="false" type="button">Trowel</button>
    <button aria-pressed="false" type="button">Stamp</button>
    <button aria-pressed="false" type="button" disabled>Polish</button>
  </slab-styled-toolbar>
usage: |
  <slab-toolbar label="Formatting">
    <button aria-pressed="false">Bold</button>
    <button aria-pressed="false">Italic</button>
    <button>Link</button>
  </slab-toolbar>
---

## Keyboard

| Key         | What it does                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Left, Right | Moves to the previous or next control, wrapping and skipping disabled ones. Up and Down instead when `orientation` is "vertical". |
| Home, End   | Moves to the first or last control.                                                                                               |
| Tab         | Leaves the toolbar. Coming back, focus returns to the control focused last.                                                       |
