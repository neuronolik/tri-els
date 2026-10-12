---
title: Pagination
group: Navigation
element: '<nav> + <button>s'
tags: [slab-pagination]
summary: "Buttons for moving between pages, with an ellipsis for the ones it doesn't show."
example: |
  <slab-styled-pagination label="Pour log" page="5" total="12"></slab-styled-pagination>
usage: |
  <slab-pagination page="1" total="20"></slab-pagination>
---

When it dispatches "change", read the new `page` and navigate.
