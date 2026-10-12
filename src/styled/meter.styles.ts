import { css } from 'lit';

/*
  Chromium and WebKit draw each region's value with a pseudo-element of its
  own. Firefox has one, which takes its color from Meter's states.
*/
export default css`
  :host {
    color: var(--ink);
    display: grid;
    font-family: var(--font-body);
    gap: 0.5rem;
  }

  [part~='label'] {
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 600;
  }

  [part~='meter'] {
    appearance: none;
    background: var(--paper);
    block-size: 1.375rem;
    border: var(--border);
    box-sizing: border-box;
    inline-size: 100%;
    padding: 2px;

    /*
      The bar keeps its own height otherwise, a line or so, rather than
      filling the meter's.
    */
    &::-webkit-meter-inner-element {
      block-size: 100%;
      display: flex;
    }

    &::-webkit-meter-bar {
      background: transparent;
      border: 0;
      border-radius: 0;
      flex-grow: 1;
    }

    &::-webkit-meter-optimum-value,
    &::-webkit-meter-suboptimum-value,
    &::-webkit-meter-even-less-good-value {
      block-size: 100%;
    }

    &::-webkit-meter-optimum-value {
      background: var(--ink);
    }

    &::-webkit-meter-suboptimum-value {
      background: var(--ember);
    }

    &::-webkit-meter-even-less-good-value {
      background: repeating-linear-gradient(
        -45deg,
        var(--ember-deep) 0 0.375rem,
        var(--ember) 0.375rem 0.75rem
      );
    }

    &::-moz-meter-bar {
      background: var(--ink);
    }
  }

  :host(:state(suboptimum)) [part~='meter']::-moz-meter-bar {
    background: var(--ember);
  }

  :host(:state(even-less-good)) [part~='meter']::-moz-meter-bar {
    background: repeating-linear-gradient(
      -45deg,
      var(--ember-deep) 0 0.375rem,
      var(--ember) 0.375rem 0.75rem
    );
  }
`;
