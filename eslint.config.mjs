import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "**/node_modules/**", // Default ignore for dependencies
      "**/.next/**",        // Ignore Next.js build output
      // "**/dist/**",         // Ignore build output directories
      // "**/*.min.js",        // Ignore minified JavaScript files
      // "**/*.test.js",       // Ignore test files if desired
    ],
  }
];

export default eslintConfig;
