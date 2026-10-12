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
    margin-block-end: 0.5rem;
  }

  :host(:state(required)) [part~='label']::after {
    color: var(--ember-deep);
    content: ' *' / '';
  }

  [part~='radios'] {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  /*
    Spaced by what's in it rather than by a gap, so a description with
    nothing in it takes no room, and a control beside the field lines up
    with its bottom edge.
  */
  [part~='description'] {
    color: var(--ash);
    display: grid;
    font-size: 0.875rem;
  }

  ::slotted([slot='description']) {
    margin-block-start: 0.375rem;
  }

  [part~='validity-message'] {
    color: var(--ember-deep);
    font-weight: 600;
    margin-block-start: 0.375rem;

    &::before {
      content: '■ ' / '';
    }
  }
`;
