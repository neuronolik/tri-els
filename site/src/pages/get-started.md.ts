import type { APIRoute } from 'astro';
import { guideMarkdown } from '../lib/get-started.ts';

export const GET: APIRoute = () =>
  new Response(`${guideMarkdown()}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
