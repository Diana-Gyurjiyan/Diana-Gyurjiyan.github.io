import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One schema for all three sections, so every item has the same fields.
// Add a new item by creating a Markdown file in src/content/<section>/.
const entry = z.object({
  title: z.string(),
  summary: z.string(),
  title_nl: z.string().optional(),
  summary_nl: z.string().optional(),
  date: z.coerce.date(),
  status: z.enum(['forthcoming', 'in-progress', 'published']).default('forthcoming'),
  tags: z.array(z.string()).default([]),
  // Set this when an item exists in one language only. Leave it out if the
  // text works in both languages. The other language then shows a small note.
  lang: z.enum(['en', 'nl']).optional(),
});

const make = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${dir}` }),
    schema: entry,
  });

export const collections = {
  research: make('research'),
  essays: make('essays'),
  blocks: make('blocks'),
};
