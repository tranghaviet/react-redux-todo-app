import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input
  function onFormSubmit (event) {
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addToDo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={e => onFormSubmit(e)}>
        <input ref={node => input = node /* what's this */}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

// If this component want to receive update state,
// it must wrap in connect itself.
export default connect()(AddTodo)
