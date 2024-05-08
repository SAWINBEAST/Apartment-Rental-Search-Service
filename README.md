# React + TypeScript + Vite + JsonServer

- Add-on to the "skeleton" (template) of the site by https://github.com/Milrael
- Minimum logics (hooks) for now. 
- "Циан" the emblem was taken as an example. Copyright is reserved by the copyrightholder (Циан). It is not my property. I used it as an advertisement for this company.

![Approximate landing of Apartment rental search web site - Catalog page](https://github.com/SAWINBEAST/Apartment-Rental-Search-Service/blob/main/Catalog%20page%20screen.png)
![Approximate landing of Apartment rental search web site - main page](https://github.com/SAWINBEAST/Apartment-Rental-Search-Service/blob/main/Main%20page%20screen.png)

##Also:
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
