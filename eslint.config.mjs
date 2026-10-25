import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    // The provided code base relies on loosely typed Contentful responses.
    rules: { "@typescript-eslint/no-explicit-any": "warn" },
  },
  {
    // lib/setup.js is a plain CommonJS Node script.
    files: ["lib/setup.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
];

export default config;
