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
    margin-block-end: 0.375rem;
  }

  :host(:state(required)) [part~='label']::after {
    color: var(--ember-deep);
    content: ' *' / '';
  }

  /*
    Focus stays on the listbox and the active Option shows where the keyboard
    is, so the listbox's own focus is the shadow, as Text Field's is.
  */
  [part~='listbox'] {
    background-color: var(--paper);
    border: var(--border);
    max-block-size: 16rem;
    overflow-y: auto;
    padding: 0.25rem 0;
    transition: box-shadow 100ms;

    &:focus-visible {
      box-shadow: 4px 4px 0 var(--ember);
      outline: 2px solid transparent;
    }
  }

  :host(:state(error)) [part~='listbox'] {
    border-color: var(--ember-deep);
  }

  :host(:state(disabled)) [part~='listbox'] {
    background-color: var(--chalk);
    border-style: dashed;
    color: var(--ash);
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

  @media (prefers-reduced-motion: reduce) {
    [part~='listbox'] {
      transition: none;
    }
  }
`;
