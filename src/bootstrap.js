import { todosRef } from "./firebase/todos";
import store from './store'
import { setTodos } from './actions'

todosRef.once('value', snapshot => {
  console.log('Initialize state from Firebase')
  const val = snapshot.val()
  let todos = []

  Object.keys(val).forEach(key => {
    todos.push(val[key])
  })
  store.dispatch(setTodos(todos))
})
