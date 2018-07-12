import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import store from './store'
// import {
//   addToDo,
//   toggleToDo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch(addToDo('Learn about actions'))
// store.dispatch(addToDo('Learn about reducers'))
// store.dispatch(addToDo('Learn about store'))
// store.dispatch(toggleToDo(0))
// store.dispatch(toggleToDo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// // Stop listening to state updates
// unsubscribe()
