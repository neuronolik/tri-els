---
title: Listbox
group: Selection
element: '[role=listbox]'
tags: [slab-listbox, slab-option]
summary: 'A list of Options to pick one or more from, right on the page instead of in a popup.'
example: |
  <slab-styled-listbox label="Crew" multiple>
    <slab-styled-option value="ana" selected>Ana, finisher</slab-styled-option>
    <slab-styled-option value="ben">Ben, pump operator</slab-styled-option>
    <slab-styled-option value="chen">Chen, form setter</slab-styled-option>
    <slab-styled-option value="dee">Dee, laborer</slab-styled-option>
    <slab-styled-option value="eli" disabled>Eli, on leave</slab-styled-option>
  </slab-styled-listbox>
usage: |
  <slab-listbox label="Size" name="size">
    <slab-option value="s">Small</slab-option>
    <slab-option value="m" selected>Medium</slab-option>
    <slab-option value="l">Large</slab-option>
  </slab-listbox>
---

Option, documented here, is also what [Select](../select/) and
[Combobox](../combobox/) use.

## Keyboard

| Key          | What it does                                                              |
| ------------ | ------------------------------------------------------------------------- |
| Up, Down     | Moves the active Option, stopping at each end and skipping disabled ones. |
| Home, End    | Moves to the first or last Option.                                        |
| A character  | Moves to the next Option whose label starts with what's typed.            |
| Enter, Space | Selects the active Option, or toggles it when `multiple` is set.          |

With `multiple`, Shift with Up or Down moves and toggles, Shift with Space
selects from the last selected Option to the active one, Control or Command
with Shift and Home or End selects from the active one to the first or last,
and Control or Command with A selects every Option, or none.
