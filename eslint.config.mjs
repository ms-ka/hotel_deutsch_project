import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Указание глобальных переменных для браузера
    },
  },
  pluginJs.configs.recommended, // Рекомендуемые правила из плагина @eslint/js
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"], // Указываем, какие файлы проверяются
  },
];