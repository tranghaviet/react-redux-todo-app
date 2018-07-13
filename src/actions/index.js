// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.
/*
 * action types
 */
export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextToDoId = 0

/*
* Action creators: create actions. factory pattern.
*/
export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
})

export const addToDo = text => ({
  type: ADD_TODO,
  id: nextToDoId++,
  text,
})

export const removeToDo = id => ({
  type: REMOVE_TODO,
  id,
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})

export const toggleToDo = id => ({
  type: TOGGLE_TODO,
  id,
})

/*
* other constants
*/
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
