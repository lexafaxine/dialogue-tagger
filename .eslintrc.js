module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "autofix",
  ],
  rules: {
    "max-len": ["error", {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
    }],
    quotes: ["error", "double", {
      allowTemplateLiterals: true,
    }],
    // "prettier/prettier": "error",
    "default-param-last": "off",
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "autofix/no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "import/no-anonymous-default-export": "error",
    "import/extensions": ["error", {
      js: "ignorePackages",
      json: "always",
      ts: "never",
    }],
    "object-curly-newline": ["error", 
    {
      ObjectExpression: {
        minProperties: 3,
        multiline: true,
      },
      ObjectPattern: {
        minProperties: 3,
        multiline: true,
      },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
      },
      ExportDeclaration: {
        minProperties: 3,
        multiline: true,
      },
    }
  ],
    "react/jsx-filename-extension": ["error", {
      extensions: [".js", ".jsx", ".tsx"],
    }],
    "react/jsx-props-no-spreading": [
      "warn",
      {
        custom: "ignore",
      },
    ],
    "react/require-default-props": "off",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-max-props-per-line": ["error", {
      maximum: 1,
      when: "multiline",
    }],
    "react/jsx-curly-spacing": ["error", "never"],
    "react/function-component-definition": ["error", {
      namedComponents: ["function-declaration", "arrow-function"],
    }],
    "simple-import-sort/imports": ["error", {
      groups: [
        ["^react$", "^@reduxjs", "^redux", "^@rjsf"],
        ["^@mui"],
        ["^@"],
        ["^[a-z]"],
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        ["^.+\\.s?css$"],
        ["^\\u0000"],
      ],
    }],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./",
      },
      node: {
        paths: ["src"],
      },
    },
  },
};
