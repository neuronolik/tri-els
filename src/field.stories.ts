import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './field.js';

const meta: Meta = {
  title: 'Field',
  decorators: [
    (story) =>
      html`<form action="/">
        <script type="ignore">
          import 'slab-elements/field.js';
        </script>

        ${story()}
      </form>`,
  ],
  args: {
    'slot="default"': '',
    disabled: false,
    error: false,
    'hide-label': false,
    required: false,
    'slot="control"': '',
    'slot="description"': '',
    version: '',
  },
  argTypes: {
    'slot="default"': {
      control: false,
      table: {
        type: {
          summary: 'Element | string',
          detail:
            '// The label. Field points its `for` at the slotted control.',
        },
      },
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail: '// Sets `:state(disabled)` for styles outside to select.',
        },
      },
    },
    error: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail: '// Sets `:state(error)` for styles outside to select.',
        },
      },
    },
    'hide-label': {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail:
            '// Hides the label visually. It still names the control for screenreaders.',
        },
      },
    },
    required: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail:
            '// Sets `:state(required)`. Field renders no asterisk of its own.',
        },
      },
    },
    'slot="control"': {
      control: false,
      table: {
        type: {
          summary: 'Element',
          detail: '// The control the label names',
        },
      },
    },
    'slot="description"': {
      control: false,
      table: {
        type: {
          summary: 'Element | string',
          detail: '// Text about the control, such as a hint or an error',
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
    return html`<slab-field
      ?disabled=${arguments_.disabled}
      ?error=${arguments_.error}
      ?hide-label=${arguments_['hide-label']}
      ?required=${arguments_.required}
    >
      <label>Label</label>
      <input slot="control" />
      <div slot="description">Description</div>
    </slab-field>`;
  },
};

export default meta;

export const Field: StoryObj = {};
