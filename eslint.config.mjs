import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
  ),
  {
    ignores: [
      // "**/node_modules/",
      "**/node_modules/**", // Default ignore for dependencies
      "**/.next/**", // Ignore Next.js build output
      "package-lock.json", // Ignore npm lock file
      "*.d.ts", // Ignore TypeScript declaration files
      "**/dist/**", // Ignore build output directories
      ".config/*", // Ignore configuration files
      // "**/*.min.js",        // Ignore minified JavaScript files
      // "**/*.test.js",       // Ignore test files if desired
    ],
    rules: {
      // Prettier integration
      "prettier/prettier": "error", // Treat Prettier issues as errors

      // Example TypeScript rules
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
