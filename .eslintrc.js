module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
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
    // "prettier",
    "import",
    "simple-import-sort",
  ],
  rules: {
    "max-len": ["error", {
      code: 120,
      tabWidth: 2,
    }],
    quotes: ["error", "double", {
      allowTemplateLiterals: true,
    }],
    // "prettier/prettier": "error",
    "default-param-last": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": ["off"],
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
        consistent: false,
        multiline: true,
      },
      ObjectPattern: {
        minProperties: 3,
        consistent: false,
        multiline: true,
      },
      ImportDeclaration: {
        minProperties: 5,
        consistent: false,
        multiline: true,
      },
      ExportDeclaration: {
        minProperties: 3,
        consistent: false,
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
        ["^react$", "^@reduxjs", "^redux"],
        ["^@mui"],
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
