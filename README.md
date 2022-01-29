# Nano React App Default Javascript Template Used for Tic Tac Toe Game

Tic tac gome with Each history moves and winning patterns and uploaded to Surge.sh

# Explore it - https://tic_tac_toe_reactgame.surge.sh/

![Screenshot (68)](https://user-images.githubusercontent.com/26031892/151647292-cecfae90-6d0b-41c3-970c-9e5aa66003d2.png)

![Screenshot (69)](https://user-images.githubusercontent.com/26031892/151647295-42562159-db63-4aec-bf73-d6bf858e8099.png)


![Screenshot (71)](https://user-images.githubusercontent.com/26031892/151647296-bbaafcf8-431a-45e2-8d5e-e161ca33a7c8.png)


The default template project for [nano-react-app](https://github.com/nano-react-app/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `3000`.
- `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 1234
```

Or edit the `start` script directly:

```
vite --port 1234
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app) is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

Use the following scripts for deployment:

```
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "rm -rf dist && vite build",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
