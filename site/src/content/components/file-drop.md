---
title: File Drop
group: Form
element: '<input type=file>'
tags: [slab-file-drop]
summary: 'A file input you can also drop files onto. One list of files, either way.'
example: |
  <slab-styled-file-drop label="Site photos" accept="image/*" multiple>
    <span slot="description">Photos of the forms and the rebar, for the inspector.</span>
  </slab-styled-file-drop>
usage: |
  <slab-file-drop label="Attachments" name="attachments" multiple></slab-file-drop>
---

## Keyboard

| Key          | What it does                                         |
| ------------ | ---------------------------------------------------- |
| Enter, Space | Opens the browser's file picker, as on a file input. |
