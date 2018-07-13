// ---- Selectors ----
// Get data from state in store
// usage: inside a worker: const latestTodo = yield select(getLatestTodo)
export const getLatestTodo = state =>  state.todos[state.todos.length - 1]

export const getTodos = state => state.todos

export const findTodo = (state, id) => state.todos.find(e => e.id === id)
