---
title: Drawer
group: Overlays
element: '<dialog> (non-modal)'
tags: [slab-drawer]
summary: 'A non-modal dialog for a side panel. The page behind it stays usable.'
example: |
  <button class="styled-button" type="button" data-open="drawer-example">Site details</button>

  <slab-styled-drawer id="drawer-example" label="Lot 14">
    <p>14 Alder Lane. A 1,600 square foot slab, 4 inches thick, on a gravel base.</p>
    <p>Poured Friday. Curing until the 23rd.</p>

    <form method="dialog">
      <button class="styled-button">Close</button>
    </form>
  </slab-styled-drawer>
usage: |
  <slab-drawer label="Filters">
    …

    <form method="dialog">
      <button>Done</button>
    </form>
  </slab-drawer>
---

## Keyboard

| Key    | What it does                                                                  |
| ------ | ----------------------------------------------------------------------------- |
| Escape | Closes the drawer, unless `closedby` is "none".                               |
| Tab    | Moves focus on through the drawer and out to the page. There's no focus trap. |
