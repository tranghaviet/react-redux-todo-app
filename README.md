# React + Redux Example

Simple React TODO app using Redux

## Installation
1. Clone project, run `yarn install` or `npm install`
2. Create a firebase database, then replace by your firebase configuration in `.env` file
3. Run `yarn start` or `npm start`

## Feature

1. Add a todo - Sync with Firebase
1. Toggle a todo - Sync with Firebase
1. Remove a todo - Sync with Firebase
1. Fetch todos from Firebase on start up

## How's it work?

The app fetch data from Firebase on start up and update state 'todos' then render to UI when state updated.

When you enter text into form/click button the app will trigger an action. Saga middleware will listen on action then run worker(s) to sync data on firebase.

Ref:
1. https://redux.js.org/basics
2. https://insights.innovatube.com/redux-th%E1%BA%ADt-l%C3%A0-%C4%91%C6%A1n-gi%E1%BA%A3n-ph%E1%BA%A7n-cu%E1%BB%91i-4155b1cfed03
