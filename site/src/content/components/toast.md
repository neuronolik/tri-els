---
title: Toast
group: Overlays
element: '[role=status]'
tags: [slab-toast]
summary: 'A polite heads-up that something just happened. It lives on the page up front, so screen readers actually hear it.'
example: |
  <button class="styled-button styled-button--primary" type="button" data-show="toast-example">Save pour</button>

  <slab-styled-toast id="toast-example">Pour saved.</slab-styled-toast>
usage: |
  <slab-toast duration="5000">Changes saved</slab-toast>

  <script type="module">
    document.querySelector('slab-toast').show();
  </script>
---

## Keyboard

| Key    | What it does                              |
| ------ | ----------------------------------------- |
| Escape | Dismisses the toast while focus is in it. |
