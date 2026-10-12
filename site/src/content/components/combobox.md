---
title: Combobox
group: Selection
element: '<input role=combobox>'
tags: [slab-combobox]
summary: 'A text input that filters a list of Options as you type.'
example: |
  <slab-styled-combobox label="Supplier" placeholder="Start typing a name">
    <slab-styled-option value="alder">Alder Ready-Mix</slab-styled-option>
    <slab-styled-option value="basalt">Basalt Concrete Co.</slab-styled-option>
    <slab-styled-option value="cascade">Cascade Aggregates</slab-styled-option>
    <slab-styled-option value="delta">Delta Batch Plant</slab-styled-option>
    <slab-styled-option value="eagle" disabled>Eagle Rock Materials</slab-styled-option>
  </slab-styled-combobox>
usage: |
  <slab-combobox label="Language" name="language">
    <slab-option value="en">English</slab-option>
    <slab-option value="es">Spanish</slab-option>
    <slab-option value="fr">French</slab-option>
  </slab-combobox>
---

Its Options are the same ones [Listbox](../listbox/) uses.

## Keyboard

| Key       | What it does                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------- |
| Up, Down  | Opens the listbox and moves the active Option, stopping at each end and skipping disabled ones. |
| Alt+Down  | Opens the listbox without moving.                                                               |
| Alt+Up    | Closes the listbox.                                                                             |
| Enter     | Selects the active Option and closes the listbox.                                               |
| Escape    | Closes the listbox, and a second Escape clears the input.                                       |
| Home, End | Move the caret, as in any input.                                                                |
