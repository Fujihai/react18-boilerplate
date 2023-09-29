# File structure

```
react18-boilerplate
├─ .commitlintrc.json
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.json
├─ .gitattributes
├─ .gitignore
├─ .husky
├─ .prettierrc.json
├─ .vscode
├─ craco.config.js
├─ jsconfig.json
├─ docs
├─ public
└─ src
    ├─ App.css
    ├─ App.jsx
    ├─ AppProviders.jsx
    ├─ AppRoutes.jsx
    ├─ GlobalStyles.jsx
    ├─ assets
    ├─ components
    ├─ constants
    ├─ features
    ├─ hooks
    ├─ index.css
    ├─ index.jsx
    ├─ lib
    ├─ mocks
    ├─ reportWebVitals.js
    ├─ setupProxy.js
    └─ setupTests.js
```

## .commitlintrc.json

Commitlint configuration file, standardize commitlint message.

## .editorconfig

Keep same code style in different editor.

## `.eslintignore`、`.eslintrc.json`

ESLint configuration.

## `.gitattributes`、`.gitignore`

Git configuration.

## .husky

Husky configuration.

## .prettierrc.json

Prettier plugin configuration.

## docs

Documentations.

## public

Build system will skip processing assets in this folder.

## src

### components

Common components.

### assets

Static js/css/img files.

### constants

Global constants，include request api url and environment variable.

### features

Pages in project.

### hooks

Common hooks.

### lib

Global request with interceptors configuration.

### mocks

Mocks api handlers lives, see [msw basis](https://mswjs.io/docs/basics) for more.
