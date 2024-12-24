import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
        "unused-imports": unusedImports,
    },

    languageOptions: {
        globals: {
            React: true,
            JSX: true,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "./tsconfig.json",
        },
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",

        "react/jsx-curly-brace-presence": ["warn", {
            props: "never",
            children: "never",
        }],

        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "simple-import-sort/exports": "warn",

        "simple-import-sort/imports": ["warn", {
            groups: [
                ["^@?\\w", "^\\u0000"],
                ["^.+\\.s?css$"],
                ["^@/lib", "^@/hooks"],
                ["^@/data"],
                ["^@/components", "^@/container"],
                ["^@/store"],
                ["^@/"],
                [
                    "^\\./?$",
                    "^\\.(?!/?$)",
                    "^\\.\\./?$",
                    "^\\.\\.(?!/?$)",
                    "^\\.\\./\\.\\./?$",
                    "^\\.\\./\\.\\.(?!/?$)",
                    "^\\.\\./\\.\\./\\.\\./?$",
                    "^\\.\\./\\.\\./\\.\\.(?!/?$)",
                ],
                ["^@/types"],
                ["^"],
            ],
        }],
    },
}];