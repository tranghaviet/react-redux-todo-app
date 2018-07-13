import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions'
import { call, select, takeEvery } from 'redux-saga/effects'
import { findTodo } from './selectors'
import { updateFirebase } from '../firebase/todos';

function errorHandler(err) {
  if (err) {
    console.error('an error occurred...')
    console.error(err)
  }
}

// Ref: https://redux-saga.js.org/docs/api/
// https://www.firebase.com/docs/web/api/firebase
// ******** Workers ********
// each function corresponding a/many action(s)
export function* addTodo(action) {
  console.log('add todo worker')
  const { id, text } = action

  try {
    // yield todosRef.update({[action.id]: {id, text, completed: false}}, errorHandler)
    yield call(updateFirebase, {[action.id]: {id, text, completed: false}}, errorHandler)
  } catch (err) {
    console.error(err)
  }
}

export function* removeTodo(action) {
  console.log('remove todo worker')
  try {
    yield call(updateFirebase, {[action.id]: null}, errorHandler)
  } catch (err) {
    console.error(err)
  }

}

export function* toggleTodo(action) {
  console.log('toggle todo worker')
  try {
    const todo = yield select(findTodo, action.id)
    yield call(updateFirebase, {[action.id]: todo}, errorHandler)
  } catch (err) {
    console.error(err)
  }
}

// ******** Watchers ********
// map action to workers
export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo)
}

export function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO, removeTodo)
}

export function* watchAToggleTodo() {
  yield takeEvery(TOGGLE_TODO, toggleTodo)
}

// Fork (async) performs a non-blocking operation on the function passed.
// Take pauses until action received.
// Race (async) runs effects simultaneously, then cancels them all once one finishes.
// Call runs a function. If it returns a promise, pauses the saga until the promise is resolved.
// Put dispatches an action.
// Select Runs a selector function to get data from the state
// takeLatest means we are going to execute the operations, then return only the results of the last one call.
// If we trigger several cases, it’s going to ignore all of them except the last one. (watch for the latest trigger)
// takeEvery will return results for all the calls triggered (watch every action)
// delay: delay generator function
