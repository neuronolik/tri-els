import type { APIRoute } from 'astro';
import { componentsByGroup } from '../lib/index-markdown.ts';

export const GET: APIRoute = async () => {
  const byGroup = await componentsByGroup();

  const sections = byGroup.map(
    ({ components, group }) =>
      `## ${group}\n\n${components
        .map(
          (component) =>
            `- [${component.data.title}](components/${component.id}.md): \`<${component.data.tags[0]}>\`, built on \`${component.data.element}\`. ${component.data.summary}`,
        )
        .join('\n')}`,
  );

  return new Response(
    [
      '# Components',
      "> All of Slab's headless Web Components. Every one is built on a native element, or an ARIA role when the platform doesn't have one.",
      ...sections,
    ].join('\n\n') + '\n',
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
};
