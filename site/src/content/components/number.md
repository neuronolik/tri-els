---
title: Number
group: Form
element: '<input type=number>'
tags: [slab-number]
summary: 'A number field built on the native one, with stepping and validation included.'
example: |
  <slab-styled-number label="Cubic yards" max="200" min="1" step="0.5" value="38">
    <span slot="description">Order about 10% over the slab's volume.</span>
  </slab-styled-number>
usage: |
  <slab-number label="Quantity" name="quantity" min="1" max="10" value="1"></slab-number>
---

## Keyboard

| Key      | What it does                           |
| -------- | -------------------------------------- |
| Up, Down | Steps the value, as on a number input. |
