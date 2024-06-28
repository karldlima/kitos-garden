module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
    `pnpm prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) =>
    `pnpm prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
};
