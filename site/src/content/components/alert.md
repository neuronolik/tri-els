---
title: Alert
group: Overlays
element: '[role=alert]'
tags: [slab-alert]
summary: "An inline message that gets announced when it shows up. Put it on the page empty, then fill it in when there's something to say."
example: |
  <button class="styled-button" type="button" data-announce="alert-example" data-message="Error: the slab's surface dropped below 40 °F. Cover it tonight.">
    Simulate a cold snap
  </button>

  <slab-styled-alert id="alert-example" dismissible></slab-styled-alert>
usage: |
  <slab-alert dismissible></slab-alert>

  <script type="module">
    document.querySelector('slab-alert').textContent =
      'Error: the file is too large';
  </script>
---
