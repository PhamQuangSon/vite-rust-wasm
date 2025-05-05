import { tanstackConfig } from "@tanstack/eslint-config";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginImport from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  ...tanstackConfig({
    typescript: {
      tsconfigPath: "./tsconfig.json"
    },
    react: true
  }),
  {
    plugins: {
      "react-refresh": eslintPluginReactRefresh,
      "simple-import-sort": eslintPluginSimpleImportSort,
      import: eslintPluginImport
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error"
    }
  },
  {
    rules: {
      ...prettier.rules
    }
  }
];
