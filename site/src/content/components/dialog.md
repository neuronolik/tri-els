---
title: Dialog
group: Overlays
element: '<dialog> (modal)'
tags: [slab-dialog]
summary: 'A modal dialog built on the native `<dialog>`. Focus stays inside, Escape closes it, and the rest of the page goes inert — the platform does the heavy lifting.'
example: |
  <button class="styled-button styled-button--danger" type="button" data-open="dialog-example">
    Strip forms
  </button>

  <slab-styled-dialog id="dialog-example" label="Strip the forms?" closedby="any">
    <p>
      It's day 2 of 7. Concrete reaches about 70% of its strength in a week,
      and stripping the forms now can crack the edges.
    </p>

    <form class="actions" method="dialog">
      <button class="styled-button" value="cancel">Wait</button>
      <button class="styled-button styled-button--danger" value="strip">Strip anyway</button>
    </form>
  </slab-styled-dialog>
usage: |
  <slab-dialog label="Delete this file?">
    <p>It can't be recovered.</p>

    <form method="dialog">
      <button value="cancel">Cancel</button>
      <button value="delete">Delete</button>
    </form>
  </slab-dialog>
---

Open it by setting `open`. When it closes, `returnValue` tells you which
button did it — same as a `<dialog>`.

## Keyboard

| Key            | What it does                                                                      |
| -------------- | --------------------------------------------------------------------------------- |
| Tab, Shift+Tab | Moves focus between the dialog's controls. The rest of the page is inert.         |
| Escape         | Closes the dialog and dispatches "cancel", which can be canceled to keep it open. |
