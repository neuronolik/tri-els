import { css } from 'lit';

export default css`
  :host {
    color: var(--ink);
    display: grid;
    font-family: var(--font-body);
  }

  [part~='label'] {
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 600;
    margin-block-end: 0.75rem;
  }

  :host(:state(required)) [part~='label']::after {
    color: var(--ember-deep);
    content: ' *' / '';
  }

  [part~='group'] {
    display: grid;
    gap: 0.75rem;
  }

  /*
    Spaced by what's in it rather than by a gap, so a description with
    nothing in it takes no room.
  */
  [part~='description'] {
    color: var(--ash);
    display: grid;
    font-size: 0.875rem;
  }

  ::slotted([slot='description']) {
    margin-block-start: 0.75rem;
  }

  [part~='validity-message'] {
    color: var(--ember-deep);
    font-weight: 600;
    margin-block-start: 0.75rem;

    &::before {
      content: '■ ' / '';
    }
  }
`;
