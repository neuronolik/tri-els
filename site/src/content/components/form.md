---
title: Form
group: Form
element: '<form>'
tags: [slab-form]
summary: "A `<form>` that Slab's controls submit, reset, and validate with — just like native ones."
example: |
  <slab-styled-form label="Schedule a pour">
    <slab-styled-text-field label="Job name" name="job" value="14 Alder Lane foundation" required></slab-styled-text-field>
    <slab-styled-date-field label="Pour date" name="date" required></slab-styled-date-field>
    <slab-styled-number label="Cubic yards" min="1" name="yards" value="38"></slab-styled-number>
    <div>
      <button class="styled-button styled-button--primary">Schedule</button>
    </div>
  </slab-styled-form>
usage: |
  <slab-form label="Sign up" action="/sign-up" method="post">
    <slab-text-field label="Email" name="email" type="email" required></slab-text-field>
    <button>Sign up</button>
  </slab-form>
---

A plain `<form>` works with Slab's controls too. Reach for Form when you
want what it adds: a label that makes the form a landmark, and a
`checkValidity()` that doesn't show errors, just like a native one.

## Keyboard

| Key   | What it does                                      |
| ----- | ------------------------------------------------- |
| Enter | In a field, submits the form, as in a native one. |
