import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:import/recommended"),

  {
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "alphabetize": { "order": "asc", "caseInsensitive": true },
          "newlines-between": "always"
        }
      ],
    },
  },
];

export default eslintConfig;