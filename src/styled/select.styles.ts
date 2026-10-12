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

  [part~='combobox'] {
    align-items: center;
    background-color: var(--paper);
    border: var(--border);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;

    /*
      A fixed height, shared with Text Field, so fields and the controls
      beside them line up whatever the font.
    */
    min-block-size: 3rem;
    padding: 0 0.75rem;
    transition:
      border-color 100ms,
      box-shadow 100ms;

    /* The chevron: a corner of border, turned. */
    &::after {
      block-size: 0.5rem;
      border-block-end: 2px solid currentcolor;
      border-inline-end: 2px solid currentcolor;
      content: '';
      flex-shrink: 0;
      inline-size: 0.5rem;
      rotate: 45deg;
      transition: rotate 150ms;
      translate: 0 -0.125rem;
    }

    /*
      Shadows only, without Text Field's lift. The combobox anchors the
      popover, and the popover would move with it.
    */
    &:focus-visible {
      box-shadow: 4px 4px 0 var(--ember);
      outline: 2px solid transparent;
    }
  }

  :host(:state(open)) [part~='combobox'] {
    box-shadow: var(--shadow);

    &::after {
      rotate: 225deg;
      translate: 0 0.125rem;
    }

    &:focus-visible {
      box-shadow: 4px 4px 0 var(--ember);
    }
  }

  :host(:state(placeholder-shown)) [part~='value'] {
    color: var(--ash);
  }

  :host(:state(error)) [part~='combobox'] {
    border-color: var(--ember-deep);
  }

  :host(:state(disabled)) [part~='combobox'] {
    background-color: var(--chalk);
    border-style: dashed;
    color: var(--ash);
    cursor: not-allowed;
  }

  /* A closed popover isn't displayed, so this runs each time it opens. */
  [part~='popover'] {
    animation: drop 150ms ease-out;
    background-color: var(--paper);
    border: var(--border);
    box-shadow: var(--shadow);
    box-sizing: border-box;
    color: var(--ink);
    margin-block: 0.5rem;
    max-block-size: 18rem;
    min-inline-size: anchor-size(inline);
    overflow-y: auto;
    padding: 0.25rem 0;
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

  @keyframes drop {
    from {
      opacity: 0;
      translate: 0 -0.375rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='combobox'],
    [part~='combobox']::after {
      transition: none;
    }

    [part~='popover'] {
      animation: none;
    }
  }
`;
