import { getCollection } from 'astro:content';
import type { Lang, Section } from '../i18n/ui';

type CollectionName = Section['collection'];

/** All entries of a section, newest first. */
export async function sectionEntries(collection: CollectionName) {
  const items = await getCollection(collection);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Forthcoming items have no page yet, so they get no link. */
export function entryHref(lang: Lang, section: Section, entry: { id: string; data: { status: string } }) {
  return entry.data.status === 'forthcoming' ? undefined : `/${lang}/${section.slug}/${entry.id}/`;
}
