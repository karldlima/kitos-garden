This repository contains the source code for my personal portfolio and blog site. It is built using Next.js SSR, Tailwind CSS, Strapi CMS.

The project article for this repo can be found [http://localhost:3000/projects/digital-garden](here)

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Design system

I'm trying to use CSS variables for theming, along with tailwind config for optimal reusability. I'm also attempting to maintain these reusable base components so they can be transferred over to a custom component library at some point. I plan to use cva for theme variants.

### Git

We use conventional commits. For more information you can check out the [https://www.conventionalcommits.org/en/v1.0.0/](Conventional Commit Homepage).

### ESLint and Type Checking

I've configured a Husky pre-commit hook and lint-staged to run linting, typechecking and prettifying any changes being pushed to main branch to ensure integrity of the software.

Alternatively the following commands can be run to check:

```bash
pnpm run lint
pnpm run check-types
```

### SEO

I've implemented Meta tags, JSON-LD Schemas, Sitemaps, robots.txt, Link tags, and Image optimization to ensure SEO optimization.

### Accessibility

To make the application more accessible, we must consider:

- WAI-ARIA standards for designing the JSX *structure* of your app, to prevent the exclusion of anyone living with motor, cognitive, audio, or visual differences.
  This includes ARIA attributes (role, aria-describedby, aria-labelledby, aria-label),
- WCAG guide for making the *content* of the app more accessible, to improve online content accessibility. This includes focus management.
