// The Markdown twins of the home page and the components index, and the
// llms.txt that points at every twin.

import { getCollection } from 'astro:content';
import { groups } from './groups.ts';

export const description =
  'Slab is a headless Web Component library, published as `slab-elements`. Each element handles the hard parts — keyboard and focus, ARIA, form participation, events — on top of the native element it maps to. What it looks like is up to you: style it from the outside with `::part()` and `:state()`, or subclass it and make it your own.';

export async function componentsByGroup() {
  const components = (await getCollection('components')).toSorted((a, b) =>
    a.data.title.localeCompare(b.data.title),
  );

  return groups.map((group) => ({
    components: components.filter(
      (component) => component.data.group === group,
    ),
    group,
  }));
}

export const usage = `\`\`\`sh
pnpm add slab-elements lit
\`\`\`

\`lit\` is a peer dependency. Import each element you use, which registers it,
with any bundler, or an import map, resolving the imports:

\`\`\`html
<script type="module">
  import 'slab-elements/disclosure.js';
</script>

<slab-disclosure label="Foundation">
  Poured once, built on forever.
</slab-disclosure>
\`\`\`

Nothing's styled until you style it. Every piece you'd want to reach is a
\`::part()\`, and every state you'd want to react to is a \`:state()\`:

\`\`\`css
slab-disclosure::part(summary) {
  font-weight: 600;
}

slab-disclosure[open]::part(summary) {
  color: #b3381a;
}
\`\`\`

Want to go further? Subclass an element, set \`styles\`, and register it under
a tag of your own. Its functional styles stick around underneath yours:

\`\`\`js
import Disclosure from 'slab-elements/disclosure.js';
import { css } from 'lit';

customElements.define(
  'acme-disclosure',
  class extends Disclosure {
    static styles = css\`
      [part~='summary'] {
        font-weight: 600;
      }
    \`;
  },
);
\`\`\``;
