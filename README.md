# Jura

> Full-stack univeral React boilerplate web app built using ReactJS, Redux and GraphQL, built on the awesome reactGo framework :ghost:

## Features:

- [**React 16**](https://facebook.github.io/react/)
- [**React Router 4**](https://github.com/reactjs/react-router)
- [**Webpack 4**](https://github.com/webpack/webpack)
- [**ECMAScript 2017 (ES7)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla)
- [**Universal**](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb#.4x2t3jlmx) rendering :earth_asia:
- [**GraphQL**](http://graphql.org/learn/)
- [**Redis**](https://redis.io/) API caching
- [**Redux**](https://github.com/reactjs/redux)
- [**React Router Redux**](https://github.com/reactjs/react-router-redux)
- [**React Hot Loader**](https://github.com/gaearon/react-hot-loader)
- [**Redux-Devtools Chrome Extension**](https://github.com/zalmoxisus/redux-devtools-extension)
- [**CSS Module w/ SASS support**](https://github.com/css-modules/css-modules)
- [**Code Splitting**](https://webpack.js.org/guides/code-splitting/)
- [**Express 4.x**](https://expressjs.com/en/api.html) server

## Getting started

⛔️ 📛 🚫 **IMPORTANT** run `yarn build` or `npm run build` at the start of each project

### Running Server

`yarn && yarn dev`

or using NPM

`npm install && npm run dev`

### Configuration

Rename `/config/app-template.js` to `/config/app.js`

- `ROOT_API` GraphQL root URL *(does not require changing from default)*
- `REDIS_PREFIX` Prefix for redis keys to avoid key clashes during development (required in production unless you disable redis via ENV variables)
- `trackingID` Google Analytics tracking ID, replace with 'UA-########-#'

### Redis Setup (optional)

- Redis runs by default in production, this can be changed in `/env.js`
- Redis can be ran whilst in development by running `npm run dev:redis` or `yarn dev:redis`
- Redis cache can be cleared by hitting `${baseURL}/api/flushredis` in your browser

#### Install Redis (optional):

`brew install redis`

*(you can also [manually install](https://redis.io/topics/quickstart), but if you don't have brew it's rather useful!)*

Open a new terminal and run

`redis-server /usr/local/etc/redis.conf`

make sure to keep this terminal open as it's not running as a daemon. To see more ways of launching redis, check this [blog post](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298) out.

### Styling

Component and container level based styles exist in `/app/components/*/*.scss` & `app/containers/*/*.scss` and are imported at the top of each JSX file (beneath absolute and relative module/component imports):

```
// Header.jsx
import React from 'react';
import { Logo } from './Logo';
import './Header.scss';
```

Global SASS partials (variables, typography, grid settings etc) are contained within `/app/sass/` and are split between two folders:

#### /base

For storing Sass mixins, variables and functions across the project.

#### /global

For styles and classes used throughout the project, such as our CSS reset, typography rules, etc. Imported in App container (`/app/containers/App.jsx`) - file imports need be relative to here.

### GraphQL

All data from WP-API is consumed in GraphQL with the help of Graph.ql (https://github.com/matthewmueller/graph.ql), which returns a smaller, more succinct response using Express. The purpose is to reduce the amount of JSON contained within the initial state that gets supplied to the document by the server when running universally.

The GraphQL schemas and queries are located within `/graphQL`

The GraphQL API endpoints are defined within `server/init/api.js`

Out of the box the following API requests can be made to the API server `localhost:3000/api` and can be extended by adding additional GraphQL schema within `/graphQL`:
