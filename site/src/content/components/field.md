---
title: Field
group: Form
element: '<label>'
tags: [slab-field]
summary: 'A label wired up to a control of your own. Bring any input, select, or element you like.'
example: |
  <slab-styled-field>
    <label>Mix strength</label>
    <select slot="control">
      <option>3,000 psi</option>
      <option selected>4,000 psi</option>
      <option>5,000 psi</option>
    </select>
    <span slot="description">Field labels a control of your own, here a native select.</span>
  </slab-styled-field>
usage: |
  <slab-field required>
    <label>Website</label>
    <input slot="control" type="url" />
    <span slot="description">Where people can find you.</span>
  </slab-field>
---
