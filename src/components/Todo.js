import React from 'react'
// import PropTypes from 'prop-types'

const Todo = ({ onClick, removeTodo, completed, text }) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}{' - '}
    <button onClick={removeTodo}>Delete</button>
  </li>
)

// Todo.propTypes = {
//   onclick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// }

export default Todo
