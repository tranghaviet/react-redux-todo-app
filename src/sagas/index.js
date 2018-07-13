import { watchAddTodo, watchRemoveTodo, watchAToggleTodo } from './todo'
// export root saga
export default function* rootSaga() {
  yield [
    // takeEvery(ADD_TODO, addTodo),
    // takeEvery(REMOVE_TODO, removeTodo),
    // takeEvery(TOGGLE_TODO, toggleTodo),
    watchAddTodo(),
    watchRemoveTodo(),
    watchAToggleTodo(),
  ]
}
