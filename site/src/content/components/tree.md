---
title: Tree
group: Navigation
element: '[role=tree]'
tags: [slab-tree, slab-tree-item]
summary: 'A nested list of items that expand and collapse, to pick one or more from.'
example: |
  <slab-styled-tree label="Site plan">
    <slab-styled-tree-item expanded>
      Foundation
      <slab-styled-tree-item>Footings</slab-styled-tree-item>
      <slab-styled-tree-item selected>House slab</slab-styled-tree-item>
      <slab-styled-tree-item>Garage slab</slab-styled-tree-item>
    </slab-styled-tree-item>
    <slab-styled-tree-item>
      Framing
      <slab-styled-tree-item>Walls</slab-styled-tree-item>
      <slab-styled-tree-item>Roof</slab-styled-tree-item>
    </slab-styled-tree-item>
    <slab-styled-tree-item disabled>Driveway, next spring</slab-styled-tree-item>
  </slab-styled-tree>
usage: |
  <slab-tree label="Files">
    <slab-tree-item expanded>
      src
      <slab-tree-item>index.ts</slab-tree-item>
    </slab-tree-item>
    <slab-tree-item>README.md</slab-tree-item>
  </slab-tree>
---

## Keyboard

| Key          | What it does                                                                   |
| ------------ | ------------------------------------------------------------------------------ |
| Up, Down     | Moves through the Tree Items that can be seen, skipping disabled ones.         |
| Home, End    | Moves to the first or last Tree Item.                                          |
| Right        | Expands a collapsed Tree Item, or moves to the first child of an expanded one. |
| Left         | Collapses an expanded Tree Item, or moves to the parent of one that isn't.     |
| *            | Expands every Tree Item with children at the active one's level.               |
| A character  | Moves to the next Tree Item whose label starts with what's typed.              |
| Enter, Space | Selects the active Tree Item, or toggles it when `multiple` is set.            |

With `multiple`, Shift with Up or Down moves and toggles, Shift with Space
selects from the last selected Tree Item to the active one, Control or
Command with Shift and Home or End selects from the active one to the first
or last, and Control or Command with A selects every one, or none.
