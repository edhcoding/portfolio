import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] }, // 'dist' 폴더는 eslint 검사 무시
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended], // eslint 규칙 확장
    files: ["**/*.{ts,tsx}"], // 검사 대상 파일들
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 문법 지원
      globals: globals.browser, // 브라우저 환경 전역 변수를 허용
      parserOptions: {
        ecmaVersion: "latest", // 최신 ECMAScript 문법 지원
        ecmaFeatures: { jsx: true }, // JSX 문법을 허용 (React에서 사용)
        sourceType: "module", // ECMAScript 모듈(ESM) 사용
      },
    },
    plugins: {
      react, // React 관련 ESLint 규칙 적용
      "react-hooks": reactHooks, // React Hooks 관련 규칙 적용
      "react-refresh": reactRefresh, // React Fast Refresh(핫 리로딩) 환경에서 필요한 규칙 적용
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint 기본 권장 규칙 적용
      ...react.configs.recommended.rules, // React 권장 규칙 적용
      ...reactHooks.configs.recommended.rules, // React Hooks 권장 규칙 적용
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // React Fast Refresh 관련: 컴포넌트만 export하도록 경고
      ],
    },
  }
);
