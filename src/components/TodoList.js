import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map(todo => {
      const propsList = {
        key: todo.id,
        ...todo,
        onClick: () => toggleTodo(todo.id),
        onClickRemove: () => removeTodo(todo.id),
      }
      return <Todo {...propsList}/>
    }
    )}
  </ul>
)

export default TodoList
