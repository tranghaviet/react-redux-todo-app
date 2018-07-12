import firebase from 'firebase'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions'
import { all, select, takeEvery } from 'redux-saga/effects'

const todosRef = firebase.database().ref('todos')

function errorHandler(err) {
  if (err) {
    console.error('an error occurred...')
    console.error(err)
  }
}

// Listen on data change from server on firebase
// events: value, child_added, child_changed, child_removed, child_moved (ordered data)
todosRef.on('value', snapshot => {
  console.log(snapshot.val());
})

// ---- Selectors ----
// Get data from state in store
// usage: inside a worker: const latestTodo = yield select(getLatestTodo)
// const getLatestTodo = state => {
//   return state.todos[state.todos.length - 1]
// }

// const todos = state => {
//   return state.todos
// }

const findTodo = (state, id) => {
  return state.todos.find(function(e) {
    return e.id === id
  })
}

// Ref: https://redux-saga.js.org/docs/api/
// https://www.firebase.com/docs/web/api/firebase
// ---- Workers ----
// each function corresponding a/many action(s)
function* addTodo(action) {
  const { id, text } = action

  yield todosRef.update({[action.id]: {id, text, completed: false}}, errorHandler)
}

// TODO: Bug: error at remove, after remove we unable to add new todo
function* removeTodo(action) {
  yield todosRef.update({[action.id]: null}, errorHandler)
}

function* toggleTodo(action) {
  const todo = yield select(findTodo, action.id)
  yield todosRef.update({[action.id]: todo}, errorHandler)
}

// ---- Watchers ----
// map action to workers
function* watchTodoChange() {
  yield takeEvery(ADD_TODO, addTodo)
  yield takeEvery(REMOVE_TODO, removeTodo)
  yield takeEvery(TOGGLE_TODO, toggleTodo)
}

// export root saga
export default function* rootSaga() {
  yield all([
    watchTodoChange()
  ])
}
