# Research Portfolio Template

A bilingual (English and Dutch) personal website template for researchers who want to present their research, essays, and smaller projects in a clear, editorial-style portfolio. It is built with Astro and publishes as a static site on GitHub Pages.

## Run locally

You need Node.js 20.3 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To create and preview a production build:

```sh
npm run build
npm run preview
```

## Make it yours

- Replace the sample profile text and labels in `src/i18n/ui.ts` in both the `en` and `nl` translations. The homepage name is in `src/pages/[lang]/index.astro`; change the initials in `src/layouts/Base.astro` too.
- Replace the example Markdown files in `src/content/research/`, `src/content/essays/`, and `src/content/blocks/`. Each file begins with metadata:

  ```yaml
  ---
  title: "A research project title"
  summary: "A short introduction shown in the list of projects."
  date: 2026-01-15
  status: published
  tags: [research, example]
  ---
  ```

  Use `forthcoming`, `in-progress`, or `published` for `status`. Add `lang: en` or `lang: nl` if an item is only available in one language; omit it if the content is suitable for both. The rest of the file is the item body in Markdown.
- Add your portrait and CV to `public/`, then set their paths in `src/pages/[lang]/about.astro` (for example, `/portrait.jpg` and `/cv.pdf`).
- Adjust the color tokens in `src/styles/global.css` to customize the light and dark themes.

## Publish on GitHub Pages

1. Fork or copy this repository to your GitHub account. For the current root-level URL setup, publish it as a GitHub Pages user site (`<username>.github.io`) or use your own custom domain.
2. Update the `site` URL in `astro.config.mjs` to your public site URL. If using a custom domain, update `public/CNAME` to contain that domain. Remove `public/CNAME` if you are not using a custom domain.
3. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. Push your changes to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it automatically. You can also start it manually from the repository's **Actions** tab.

The site is built as a static website; no separate web server is needed.