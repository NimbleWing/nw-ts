// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [".yarn/**", 
    ".history",
    '.pnp.cjs',
    '.pnp.loader.mjs',
    'commitlint.config.ts'
    ],

  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
