import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo
        // key={todo.id}
        key={index}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
