import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

/*
ESLint 8.0이후 Flat Config에서 사용
파일포맷은 js
완전한 JS 지원
*/

export default defineConfig([
  globalIgnores(["dist"]), // ESLint시 검사 제외
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended, // ESLint 기본 Javascript 규칙 집합
      tseslint.configs.recommended, // Typescript 코드에 적합한 추천 규칙 집합
      reactHooks.configs.flat.recommended, // React의 Hook규칙을 위한 플러그인
      reactRefresh.configs.vite, // React Fast Refresh와 관련된 규칙 제공하는 플러그인
    ],
    parserOptions: {
      project: "tsconfig.json",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
