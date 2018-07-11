import React from 'react'
// import PropTypes from 'prop-types'

const Todo = ({ onClick, onClickRemove, completed, text }) => (
  <li onClick={onClick}>
    <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
    {' - '}
    <button onClick={onClickRemove}>Remove</button>
  </li>
)

// Todo.propTypes = {
//   onclick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// }

export default Todo
