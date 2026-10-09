export const langs = ['en', 'nl'] as const;
export type Lang = (typeof langs)[number];

// The three content sections. `slug` is the URL part, `collection` the content
// collection, `nav` the key used in the translations below.
export const sections = [
  { slug: 'research', collection: 'research', nav: 'research' },
  { slug: 'essays', collection: 'essays', nav: 'essays' },
  { slug: 'building-blocks', collection: 'blocks', nav: 'blocks' },
] as const;
export type Section = (typeof sections)[number];

const LOREM_SHORT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const LOREM_LONG =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// All visible text lives here. Texts that are still placeholders are lorem ipsum.
// TODO Diana: replace the lorem ipsum texts below, per language.
const en = {
  siteTitle: 'Diana Gyurjiyan',
  tagline: 'At the intersection of philosophy, law, and AI',
  nav: {
    home: 'Home',
    about: 'About',
    research: 'Research',
    essays: 'Essays',
    blocks: 'Building blocks',
  },
  status: {
    forthcoming: 'Forthcoming',
    'in-progress': 'In progress',
    published: 'Published',
  },
  home: {
    aboutLabel: 'About',
    aboutMore: 'More about me',
    highlights: 'Highlights',
  },
  about: {
    label: 'About',
    title: 'Lorem ipsum dolor sit amet',
    intro: LOREM_LONG,
    portrait: 'Portrait',
    factFocus: 'Focus',
    factResearch: 'Research',
    factBased: 'Based in',
    factValue: 'Lorem ipsum dolor sit amet',
    cv: 'Download CV',
  },
  sections: {
    research: { title: 'Research', intro: LOREM_SHORT },
    essays: { title: 'Essays', intro: LOREM_SHORT },
    blocks: { title: 'Building blocks', intro: LOREM_SHORT },
  },
  ui: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navLabel: 'Main navigation',
    language: 'Language',
    toggleTheme: 'Switch between light and dark mode',
    back: 'Back',
    allIn: 'All in',
    onlyIn: (l: Lang) => (l === 'nl' ? 'Only available in Dutch' : 'Only available in English'),
  },
};

// @ts-ignore
const nl: typeof en = {
  siteTitle: 'Diana Gyurjiyan',
  tagline: 'Op het snijvlak van filosofie, recht en AI',
  nav: {
    home: 'Home',
    about: 'Over mij',
    research: 'Onderzoek',
    essays: 'Essays',
    blocks: 'Bouwstenen',
  },
  status: {
    forthcoming: 'Binnenkort',
    'in-progress': 'In uitvoering',
    published: 'Gepubliceerd',
  },
  home: {
    aboutLabel: 'Over mij',
    aboutMore: 'Meer over mij',
    highlights: 'Uitgelicht',
  },
  about: {
    label: 'Over mij',
    title: 'Lorem ipsum dolor sit amet',
    intro: LOREM_LONG,
    portrait: 'Portret',
    factFocus: 'Focus',
    factResearch: 'Onderzoek',
    factBased: 'Gevestigd in',
    factValue: 'Lorem ipsum dolor sit amet',
    cv: 'Download cv',
  },
  sections: {
    research: { title: 'Onderzoek', intro: LOREM_SHORT },
    essays: { title: 'Essays', intro: LOREM_SHORT },
    blocks: { title: 'Bouwstenen', intro: LOREM_SHORT },
  },
  ui: {
    skip: 'Ga naar de inhoud',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    navLabel: 'Hoofdnavigatie',
    language: 'Taal',
    toggleTheme: 'Wissel tussen lichte en donkere modus',
    back: 'Terug',
    allIn: 'Alles in',
    onlyIn: (l: Lang) => (l === 'nl' ? 'Alleen beschikbaar in het Nederlands' : 'Alleen beschikbaar in het Engels'),
  },
};

export const ui = { en, nl } as const;
