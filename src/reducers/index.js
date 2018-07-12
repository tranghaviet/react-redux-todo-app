// Reducers specify how the application's state changes in response to actions sent to the store.
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// root reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp
