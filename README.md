This repository contains the source code for my personal portfolio and blog site. It is built using Next.js SSR, Tailwind CSS, and Strapi CMS.

The project article for this repo can be found [here](http://www.gardenofkarl.com/projects/digital-garden)

## Getting Started

First, run the development server:

```bash
pnpm i
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Design system

We use CSS variables for theming and tailwind config for optimal reusability within JS. We're also maintaining these reusable base components so they can be transferred over to a custom component library at some point. We're using cva for component variants.

### Tests

We use Jest and React Testing Library for unit testing purposes, with an intent to use storybook for local component development.

### Git

We use conventional commits. For more information you can check out the [Conventional Commit Homepage](https://www.conventionalcommits.org/en/v1.0.0/).

We follow a development branch naming convention: `<work type>/<issue-number>-<short-description>`

1. Start clasifying by work type. Examples: bugfix, feature, rebase, hotfix, docs, release, refactor.
2. Use dashes - to separate words.
3. Include related issue number (if any).
4. Describe the topic using two or three words.

The code in main branch should pass tests, build cleanly, and always be current. main branch needs these qualities so that feature branches created by a team start from a known good version of code. We branch off of main and push pull requests into staging branch, before making a pull request from staging to main once the acceptance criteria is satisfied.

Wanting to deploy to production (staging to main)?
<a href="https://github.com/karldlima/kitos-garden/compare/main...staging?quick_pull=1&template=main.md">Staging Release :rocket:</a>

### ESLint and Type Checking

We've configured a Husky pre-commit hook and lint-staged to run linting, typechecking and prettifying any changes being pushed to main branch to ensure integrity of the software. ESLint rules can be modified at `.eslintrc.json`.

Alternatively the following commands can be run to check:

```bash
pnpm run lint
pnpm run check-types
```
