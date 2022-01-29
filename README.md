# Nano React App Default Javascript Template Used for Tic Tac Toe Game

Tic tac gome with Each history moves and winning patterns and uploaded to Surge.sh
# Explore it - https://tic_tac_toe_reactgame.surge.sh/

![Screenshot (69)](https://user-images.githubusercontent.com/26031892/151647188-a6335e94-1b65-4333-933f-65bffa83e893.png)
![Screenshot (71)](https://user-images.githubusercontent.com/26031892/151647191-7c768dfb-3968-48fc-b3b2-32428500e1c0.png)
![Screenshot (68)](https://user-images.githubusercontent.com/26031892/151647192-c718336c-f208-4d0b-89ca-fcd4427d6035.png)



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
