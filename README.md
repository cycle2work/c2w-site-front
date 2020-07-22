# c2w-site-front

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/cycle2work/c2w-site-front.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/cycle2work/c2w-site-front/context:javascript)
[![Build Status](https://travis-ci.org/cycle2work/c2w-site-front.svg?branch=master)](https://travis-ci.org/cycle2work/c2w-site-front)
[![codecov](https://codecov.io/gh/cycle2work/c2w-site-front/branch/master/graph/badge.svg)](https://codecov.io/gh/cycle2work/c2w-site-front)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

ReactJS frontend for [`cycle2work.io`](https://cycle2work.io).

## Table of Contents

- [c2w-site-front](#c2w-site-front)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Run the project](#run-the-project)
    - [Build the project](#build-the-project)
  - [Env Vars](#env-vars)

## Folder Structure

Apart from the conventions and deps in place for [Create React App](https://github.com/facebookincubator/create-react-app), this project also use:

- redux
- react-router

And enforce the following structure:

```
src/
  actions/
  assets/
  components/
  reducers/
    index.js
  views/
    index.js
  config.js
```

- `actions/` is the folder promoted to contains all the `redux` actions creators;
- `assets/` is the folder promoted to contains all the static resources shared accross `React` components;
- `components/` is the folder promoted to contains all the React components that can be shared accross views;
- `reducers/index.js` should exports the redux store, with all the needed middlewares applied;
- `views/index.js` is the container for all the views available within the app and the `Routes` that are associated with those;
- `config.js` is where all the env vars are readed, eventually defaulted, and exported.

## Run the project

Install the dependencies with...

```ssh
yarn
```

and then run the project

```ssh
yarn start
```

### Build the project

To just build the project you can use...

```ssh
yarn build
```

## Env Vars

```bash
REACT_APP_AWS_REPORTS_API
```
