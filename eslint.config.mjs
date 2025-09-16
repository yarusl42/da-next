import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "import/no-anonymous-default-export": "off",
      // Ignore Next.js recommendation to always use next/image
      "@next/next/no-img-element": "off",
      // Ignore unescaped entities like apostrophes in JSX text
      "react/no-unescaped-entities": "off",
    }
  }
];

export default eslintConfig;
