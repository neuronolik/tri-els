---
title: Tabs
group: Navigation
element: '[role=tablist]'
tags: [slab-tabs, slab-tabs-tab, slab-tabs-panel]
summary: 'Tabs and their Panels, with one Panel showing at a time.'
example: |
  <slab-styled-tabs label="Foundation">
    <slab-styled-tabs-tab panel="pour">Pour</slab-styled-tabs-tab>
    <slab-styled-tabs-tab panel="cure">Cure</slab-styled-tabs-tab>
    <slab-styled-tabs-tab panel="notes">Notes</slab-styled-tabs-tab>

    <slab-styled-tabs-panel name="pour">Friday at 7 a.m. 38 cubic yards of 4,000 psi, with a broom finish.</slab-styled-tabs-panel>
    <slab-styled-tabs-panel name="cure">Keep it wet for seven days. It reaches about 70% of its strength in a week.</slab-styled-tabs-panel>
    <slab-styled-tabs-panel name="notes">The northeast corner sits about an inch low. Shim the forms.</slab-styled-tabs-panel>
  </slab-styled-tabs>
usage: |
  <slab-tabs label="Account">
    <slab-tabs-tab panel="profile">Profile</slab-tabs-tab>
    <slab-tabs-tab panel="billing">Billing</slab-tabs-tab>

    <slab-tabs-panel name="profile">…</slab-tabs-panel>
    <slab-tabs-panel name="billing">…</slab-tabs-panel>
  </slab-tabs>
---

## Keyboard

| Key          | What it does                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Left, Right  | Moves to the previous or next Tab, wrapping, and selects it unless `manual` is set. Up and Down instead when `orientation` is "vertical". |
| Home, End    | Moves to the first or last Tab.                                                                                                           |
| Enter, Space | Selects the focused Tab when `manual` is set.                                                                                             |
| Tab          | Moves from the selected Tab into its Panel.                                                                                               |
