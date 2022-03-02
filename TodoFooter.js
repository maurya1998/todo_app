import React from 'react'

const TodoFooter = () => {
  return (
    <div className="footer">
        <span>You have <label id="count"></label> pending site</span>
        <button >Clear All</button>
    </div>
  )
}

export default TodoFooter;