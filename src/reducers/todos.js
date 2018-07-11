import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions'

// export default function todos (state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map(todo => {
//         if (todo.id === action.id) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.id)
//     default:
//       return state
//   }
// }

const todoReducers = {
  [ADD_TODO]: (todos, action) => [
    ...todos,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ],
  [TOGGLE_TODO]: (todos, action) => todos.map(todo =>
    (todo.id === action.id)
    ? {...todo, completed: !todo.completed}
    : todo
  ),
  [REMOVE_TODO]: (todos, action) => todos.filter(todo => todo.id !== action.id)
}

// todos reducer: only manage action relative to todo
export default function todos (state = [], action) {
  return todoReducers.hasOwnProperty(action.type)
  ? todoReducers[action.type](state, action)
  : state
}
