import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

// pnpm add --save-dev @eslint/eslintrc @eslint/js eslint-plugin-perfectionist typescript-eslint eslint-config-next

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  perfectionist.configs["recommended-alphabetical"],
  ...compat.config({
    extends: ["eslint:recommended", "next"],
  }),
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["node_modules", ".next", "out"],
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^@/.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: "always",
          maxLineLength: undefined,
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          customGroups: { type: {}, value: {} },
          environment: "node",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: {},
          groups: [],
          ignoreCase: true,
          ignorePattern: [],
          newlinesBetween: "always",
          order: "asc",
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
    },
  },
);
