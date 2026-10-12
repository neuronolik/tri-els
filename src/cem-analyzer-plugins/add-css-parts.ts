import { type Module } from 'custom-elements-manifest' with { type: 'json' };
import { parse as htmlParser, CommentNode } from 'node-html-parser';
import { parse as commentParser } from 'comment-parser';
import {
  isReturnStatement,
  isTaggedTemplateExpression,
  type Node,
} from 'typescript';
import getParentClassName from './get-parent-class-name.js';

/**
 * Adds CSS parts to the manifest.
 *
 * The analyzer reads parts from `@csspart` tags in a component's JSDoc. But
 * `remove-block-comments` clears those JSDocs, which are generated anyway. So
 * parts are read from markup instead, the same way `add-slots` reads slots.
 *
 * 1. Find `html` tagged templates.
 * 2. Parse their markup.
 * 3. Get the elements with a `part` attribute.
 * 4. Parse each element's first child comment as a JSDoc.
 * 5. Filter out elements with an `@ignore` tag.
 * 6. Add a part for each `@part` tag, for the parts bound with an expression,
 *    which can't be read from the markup.
 * 7. Find the corresponding declaration in the manifest.
 * 8. Add each part to the declaration.
 */
export default () => {
  return {
    name: 'add-css-parts',
    analyzePhase({ moduleDoc, node }: { moduleDoc: Module; node: Node }) {
      if (
        isTaggedTemplateExpression(node) &&
        isReturnStatement(node.parent) &&
        node.tag.getText() === 'html' &&
        moduleDoc.declarations
      ) {
        const parts = htmlParser(node.template.getText(), {
          comment: true,
        })
          .querySelectorAll('[part]')
          .flatMap((element) => {
            // Inside the element rather than above it for the same reason as
            // slots. See `add-slots`.
            const comment = element.childNodes.find((node) => {
              return node instanceof CommentNode;
            });

            const block = comment
              ? commentParser(`/**
                  ${comment.rawText}
                */`).at(0)
              : undefined;

            if (block?.tags.some(({ tag }) => tag === 'ignore')) {
              return [];
            }

            // Dynamic parts, bound with an expression, can't be read from the
            // markup. So they're tagged in the element's comment instead, as
            // `@part name - Description`, such as a Calendar day's `selected`.
            const taggedParts = (block?.tags ?? [])
              .filter(({ tag }) => tag === 'part')
              .map(({ description, name }) => {
                return {
                  name,
                  description: description.replace(/^-\s*/, ''),
                };
              });

            // An element can have more than one part. Pseudo-private ones,
            // which Slab's components use to style each other, aren't meant to
            // be documented.
            const staticParts = (element.getAttribute('part') ?? '')
              .split(/\s+/)
              .filter((name) => {
                return (
                  name !== '' &&
                  !name.includes('${') &&
                  !name.startsWith('private')
                );
              })
              .map((name) => {
                return {
                  name,
                  description: block?.description,
                };
              });

            return [...staticParts, ...taggedParts];
          });

        for (const declaration of moduleDoc.declarations) {
          if (
            getParentClassName(node) === declaration.name &&
            'cssParts' in declaration &&
            declaration.cssParts
          ) {
            for (const part of parts) {
              const isNew = declaration.cssParts.every(
                ({ name }) => name !== part.name,
              );

              if (isNew) {
                declaration.cssParts.push(part);
              }
            }
          }
        }
      }
    },
  };
};
