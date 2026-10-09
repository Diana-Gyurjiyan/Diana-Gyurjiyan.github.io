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
  tagline: 'Crafting production AI that reasons beyond the hype, rooted in deep research.',
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
    title: 'Building AI that matters',
    intro: 'AI Backend Engineer and external PhD candidate working where applied research meets production AI. I build systems that are useful in practice and thoughtful about the people and society they affect.',
    paragraphs: [
      'I am an AI Backend Engineer at Rabobank and an external PhD candidate at Erasmus University Rotterdam. My work brings applied research into production, with a focus on AI systems that are useful, reliable, and grounded in real human needs.',
      'From October 2022 to September 2026, I worked at ABN AMRO, where I led work on ABN AMRO GPT, a bank-wide GenAI platform serving more than 20,000 users through 10 production assistants, with over 40,000 chats a day. That work covered the full journey from modular RAG architectures and retrieval pipelines to evaluation frameworks and adoption across a large organisation.',
      'From June 2020 to October 2022, I worked as a data scientist on a COVID-19 project. Working with data in a fast-moving, high-stakes context shaped how I approach technology: start with the problem, make the evidence matter, and keep the people affected by a system in view.',
      'My academic background spans Artificial Intelligence, Philosophy, and Law. I am an existentialist because I believe existence precedes essence: we are free to choose who we become, and responsible for those choices. I try to bring that conviction to my work and to my interactions with AI and agents. These systems do not remove our responsibility; we remain accountable for how we design them, the choices we delegate to them, and how we use their output.',
      'My PhD research at Erasmus University Rotterdam explores abductive reasoning in large language models and quantum approaches to language modelling. Alongside research and engineering, I learn quickly, see projects through, and care about building things that make a meaningful difference.',
    ],
    experienceTitle: 'Experience',
    experiences: [
      ['Current', 'Rabobank · AI Backend Engineer', 'Building production AI systems at the intersection of engineering and applied research.'],
      ['Oct 2022 – Sep 2026', 'ABN AMRO · GenAI Engineer', 'Led development of ABN AMRO GPT, from modular RAG and retrieval to evaluation and organisation-wide adoption.'],
      ['Jun 2020 – Oct 2022', 'COVID-19 project · Data Scientist', 'Applied data science to a complex public-health challenge.'],
    ],
    researchTitle: 'Research & toolkit',
    research: 'External PhD candidate at Erasmus University Rotterdam, researching abductive reasoning in LLMs and quantum approaches to language modelling.',
    skills: 'Python · LangChain · LangSmith · RAG · Embeddings · Reranking · Vector databases · Azure · Kubernetes · Docker',
    location: 'Rotterdam, the Netherlands',
    portrait: 'Portrait',
    factFocus: 'Focus',
    factResearch: 'Research',
    factResearchValue: 'Abductive reasoning in LLMs and quantum approaches to language modelling',
    factBased: 'Based in',
    factValue: 'AI engineering, applied research, and responsible technology',
    linkedin: 'Connect on LinkedIn',
    cv: 'Download CV',
  },
  sections: {
    research: { title: 'Research', intro: LOREM_SHORT },
    essays: { title: 'Essays', intro: LOREM_SHORT },
    blocks: {
      title: 'Building blocks',
      intro: 'Research is most useful when its ideas can be put to work. These building blocks turn insights into practical, reusable tools for engineers and researchers; helping them move from question to experiment, and from experiment to result, with less friction.',
    },
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
  tagline: 'Bouwen aan productie-AI die verder redeneert dan de hype, geworteld in academisch onderzoek.',
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
    title: 'AI bouwen die ertoe doet',
    intro: 'AI Backend Engineer en buitenpromovendus, op het snijvlak van toegepast onderzoek en AI in de praktijk. Ik bouw systemen die bruikbaar zijn en oog hebben voor de mensen en samenleving waarop ze invloed hebben.',
    paragraphs: [
      'Ik werk als AI Backend Engineer bij Rabobank en ben buitenpromovendus aan de Erasmus Universiteit Rotterdam. In mijn werk breng ik toegepast onderzoek naar de praktijk, met aandacht voor AI-systemen die nuttig, betrouwbaar en afgestemd zijn op menselijke behoeften.',
      'Van oktober 2022 tot september 2026 werkte ik bij ABN AMRO. Daar leidde ik de ontwikkeling van ABN AMRO GPT, een bankbreed GenAI-platform dat meer dan 20.000 gebruikers bedient via 10 productie-assistenten, met ruim 40.000 chats per dag. Mijn werk besloeg het hele traject: van modulaire RAG-architecturen en retrieval pipelines tot evaluatiekaders en adoptie binnen een grote organisatie.',
      'Van juni 2020 tot oktober 2022 werkte ik als data scientist aan een COVID-19-project. Data inzetten in een snel veranderende context met grote maatschappelijke belangen heeft mijn aanpak gevormd: begin bij het probleem, baseer je op bewijs en houd de mensen die door een systeem worden geraakt in beeld.',
      'Ik heb opleidingen in Artificial Intelligence, filosofie en rechten. Ik ben existentialist omdat ik geloof dat het bestaan voorafgaat aan de essentie: we zijn vrij om te kiezen wie we worden en dragen verantwoordelijkheid voor die keuzes. Die overtuiging probeer ik mee te nemen in mijn werk en in mijn omgang met AI en agents. Deze systemen nemen onze verantwoordelijkheid niet weg: wij blijven verantwoordelijk voor hoe we ze ontwerpen, welke keuzes we aan ze overlaten en hoe we hun output gebruiken.',
      'Mijn promotieonderzoek aan de Erasmus Universiteit Rotterdam richt zich op abductief redeneren in grote taalmodellen en kwantumbenaderingen van taalmodellering. Ik leer snel, maak projecten af en wil technologie bouwen die echt iets betekent.',
    ],
    experienceTitle: 'Ervaring',
    experiences: [
      ['Huidig', 'Rabobank · AI Backend Engineer', 'Bouwt AI-systemen voor productie op het snijvlak van engineering en toegepast onderzoek.'],
      ['okt 2022 – sep 2026', 'ABN AMRO · GenAI Engineer', 'Leidde de ontwikkeling van ABN AMRO GPT, van modulaire RAG en retrieval tot evaluatie en brede adoptie.'],
      ['jun 2020 – okt 2022', 'COVID-19-project · Data Scientist', 'Zette data science in voor een complex vraagstuk op het gebied van volksgezondheid.'],
    ],
    researchTitle: 'Onderzoek & toolkit',
    research: 'Extern promovendus aan de Erasmus Universiteit Rotterdam. Onderzoek naar abductief redeneren in LLM’s en kwantumbenaderingen van taalmodellering.',
    skills: 'Python · LangChain · LangSmith · RAG · Embeddings · Reranking · Vector databases · Azure · Kubernetes · Docker',
    location: 'Rotterdam, Nederland',
    portrait: 'Portret',
    factFocus: 'Focus',
    factResearch: 'Onderzoek',
    factResearchValue: 'Abductief redeneren in LLM’s en kwantumbenaderingen van taalmodellering',
    factBased: 'Gevestigd in',
    factValue: 'AI-engineering, toegepast onderzoek en verantwoorde technologie',
    linkedin: 'Bekijk mijn LinkedIn-profiel',
    cv: 'Download cv',
  },
  sections: {
    research: { title: 'Onderzoek', intro: LOREM_SHORT },
    essays: { title: 'Essays', intro: LOREM_SHORT },
    blocks: {
      title: 'Bouwstenen',
      intro: 'Onderzoek wordt pas echt waardevol wanneer je de ideeën eruit kunt toepassen. Deze bouwstenen vertalen inzichten naar praktische, herbruikbare hulpmiddelen voor engineers en onderzoekers. Zo kunnen zij met minder omwegen van vraag naar experiment en van experiment naar resultaat werken.',
    },
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
