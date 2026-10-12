---
title: Calendar
group: Data
element: '<table role=grid>'
tags: [slab-calendar]
summary: "A month of days to pick from. It's the grid from the APG's date picker, with all the keyboard support you'd expect."
example: |
  <slab-styled-calendar min="2026-10-12" max="2026-12-18" value="2026-10-16"></slab-styled-calendar>
usage: |
  <slab-calendar value="2026-03-14"></slab-calendar>
---

## Keyboard

| Key                | What it does                                           |
| ------------------ | ------------------------------------------------------ |
| Left, Right        | Moves a day, into the month before or after at an end. |
| Up, Down           | Moves a week.                                          |
| Home, End          | Moves to the start or end of the week.                 |
| Page Up, Page Down | Moves back or forward a month. With Shift, a year.     |
| Enter, Space       | Selects the day and dispatches "change".               |
