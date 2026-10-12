import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { componentMarkdown } from '../../lib/markdown.ts';

export const getStaticPaths = (async () => {
  const components = await getCollection('components');

  return components.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ entry: CollectionEntry<'components'> }> = ({
  props,
}) =>
  new Response(componentMarkdown(props.entry), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
