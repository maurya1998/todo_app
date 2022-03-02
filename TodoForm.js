import React from 'react'

const TodoForm = () => {
  return (
    <div className="inputField">
        <input type="text" id="txtTodo" placeholder="Add your new todo">
            </input>
        <button ><i className="fas fa-plus"></i></button>
    </div>
  )
}

export default TodoForm;