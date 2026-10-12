import './progress.js';
import { html, nothing } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Progress',
  decorators: [
    (story) =>
      html`<script type="ignore">
          import 'slab-elements/progress.js';
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
    max: '',
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
            '// Hides the label visually. It still names the progress bar for screenreaders.',
        },
      },
    },
    max: {
      table: {
        type: { summary: 'number', detail: '// 1 when unset' },
      },
    },
    value: {
      table: {
        type: {
          summary: 'number',
          detail:
            '// How much of the task is done, from 0 to `max`. Indeterminate when unset.',
        },
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
    return html`<slab-progress
      label=${arguments_.label || nothing}
      max=${arguments_.max || nothing}
      value=${arguments_.value || nothing}
      ?hide-label=${arguments_['hide-label']}
    ></slab-progress>`;
  },
};

export default meta;

export const Progress: StoryObj = {};
