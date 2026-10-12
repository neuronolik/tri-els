import { css } from 'lit';

/*
  Form moves its children into a "<form>" of its own, in the light DOM, and
  slots that in. So the form is what's laid out.
*/
export default css`
  ::slotted(form) {
    display: grid;
    gap: 1.5rem;
  }
`;
