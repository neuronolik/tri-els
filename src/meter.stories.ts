import './meter.js';
import { html, nothing } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Meter',
  decorators: [
    (story) =>
      html`<script type="ignore">
          import 'slab-elements/meter.js';
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
    'hide-label': false,
    high: '',
    low: '',
    max: '',
    min: '',
    optimum: '',
    value: '0.5',
    version: '',
  },
  argTypes: {
    label: {
      table: { type: { summary: 'string' } },
      type: { name: 'string', required: true },
    },
    'hide-label': {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail:
            '// Hides the label visually. It still names the meter for screenreaders.',
        },
      },
    },
    high: {
      table: {
        type: {
          summary: 'number',
          detail: '// Where the high region starts. `max` when unset.',
        },
      },
    },
    low: {
      table: {
        type: {
          summary: 'number',
          detail: '// Where the low region ends. `min` when unset.',
        },
      },
    },
    max: {
      table: {
        type: { summary: 'number', detail: '// 1 when unset' },
      },
    },
    min: {
      table: {
        type: { summary: 'number', detail: '// 0 when unset' },
      },
    },
    optimum: {
      table: {
        type: {
          summary: 'number',
          detail:
            '// The best value, which decides which region is the optimum one. Halfway between `min` and `max` when unset.',
        },
      },
    },
    value: {
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    version: {
      control: false,
      table: {
        defaultValue: { summary: import.meta.env.VITE_SLAB_VERSION },
        type: { summary: 'string', detail: '// For debugging' },
      },
    },
  },
  render(arguments_) {
    /* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
    return html`<slab-meter
      high=${arguments_.high || nothing}
      label=${arguments_.label || nothing}
      low=${arguments_.low || nothing}
      max=${arguments_.max || nothing}
      min=${arguments_.min || nothing}
      optimum=${arguments_.optimum || nothing}
      value=${arguments_.value || nothing}
      ?hide-label=${arguments_['hide-label']}
    ></slab-meter>`;
  },
};

export default meta;

export const Meter: StoryObj = {};
