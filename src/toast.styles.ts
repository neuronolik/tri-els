import { css } from 'lit';
import visuallyHidden from './library/visually-hidden.js';

export default [
  css`
    /*
      Functional, not visual. A dismissed toast's region is hidden visually
      rather than removed, so screenreaders keep hold of it and announce what
      the next "show()" puts in it.
    */
    ${visuallyHidden(":host(:not(:state(open))) [part~='region']")}
  `,
];
