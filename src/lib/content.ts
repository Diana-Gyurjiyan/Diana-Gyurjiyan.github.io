import { getCollection } from 'astro:content';
import type { Lang, Section } from '../i18n/ui';

type CollectionName = Section['collection'];

/** All entries of a section, newest first. */
export async function sectionEntries(collection: CollectionName) {
  const items = await getCollection(collection);
  const canonicalEntries = new Map<string, (typeof items)[number]>();
  const priority = (id: string) => id.startsWith('en/') ? 0 : id.includes('/') ? 2 : 1;

  for (const entry of items) {
    const slug = entry.id.split('/').at(-1)!;
    const existing = canonicalEntries.get(slug);
    if (!existing || priority(entry.id) < priority(existing.id)) canonicalEntries.set(slug, entry);
  }

  return [...canonicalEntries.values()].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Return localized title and summary where a translation is available. */
export function entryText(lang: Lang, entry: { data: { title: string; summary: string; title_nl?: string; summary_nl?: string } }) {
  return {
    title: lang === 'nl' ? entry.data.title_nl ?? entry.data.title : entry.data.title,
    summary: lang === 'nl' ? entry.data.summary_nl ?? entry.data.summary : entry.data.summary,
  };
}

/** Forthcoming items have no page yet, so they get no link. */
export function entryHref(lang: Lang, section: Section, entry: { id: string; data: { status: string } }) {
  const slug = entry.id.split('/').at(-1);
  return entry.data.status === 'forthcoming' ? undefined : `/${lang}/${section.slug}/${slug}/`;
}
