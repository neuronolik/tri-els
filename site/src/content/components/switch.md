---
title: Switch
group: Form
element: '<input type=checkbox role=switch>'
tags: [slab-switch]
summary: 'An on and off toggle built on a native checkbox with the switch role.'
example: |
  <div class="stack">
    <slab-styled-switch label="Vapor barrier" checked>
      <span slot="description">A plastic sheet under the slab keeps ground moisture out.</span>
    </slab-styled-switch>
    <slab-styled-switch label="Cold-weather blankets">
      <span slot="description">Keep the slab above 50 °F while it cures.</span>
    </slab-styled-switch>
  </div>
usage: |
  <slab-switch label="Notifications" name="notifications" checked></slab-switch>
---

## Keyboard

| Key   | What it does        |
| ----- | ------------------- |
| Space | Turns it on or off. |
