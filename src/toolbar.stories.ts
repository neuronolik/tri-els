import './toolbar.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Toolbar',
  decorators: [
    (story) =>
      html`<script type="ignore">
          import 'slab-elements/toolbar.js';
        </script>

        ${story()}`,
  ],
  parameters: {
    docs: {
      story: {
        autoplay: true,
      },
    },
  },
  args: {
    label: 'Label',
    'slot="default"': '',
    orientation: 'horizontal',
    version: '',
  },
  argTypes: {
    label: {
      table: {
        type: { summary: 'string', detail: '// Names the toolbar.' },
      },
      type: { name: 'string', required: true },
    },
    'slot="default"': {
      control: false,
      table: {
        type: {
          summary: 'Element',
          detail:
            '// Controls that take focus themselves, such as `<button>`s, `<input>`s and links.',
        },
      },
      type: { name: 'function', required: true },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: '"horizontal"' },
        type: {
          summary: '"horizontal" | "vertical"',
          detail:
            '// Which arrow keys move between the controls. Where they sit is up to your styles.',
        },
      },
    },
    version: {
      control: false,
      table: {
        defaultValue: {
          summary: import.meta.env.VITE_SLAB_VERSION,
        },
        type: { summary: 'string', detail: '// For debugging' },
      },
    },
  },
  render(arguments_) {
    return html`<slab-toolbar
      label=${arguments_.label}
      orientation=${arguments_.orientation}
    >
      <button>One</button>
      <button>Two</button>
      <button>Three</button>
    </slab-toolbar>`;
  },
};

export default meta;

export const Toolbar: StoryObj = {};
