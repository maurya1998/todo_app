import React from 'react';

const TodoCard = () => {
  return (
    <div className='todo-items'>
        <li className="draggable todo-child" draggable="true">
            <div className='todo-date'>
                <p>01 Mar 22:10 PM</p>
            </div>
            <div className='todo-task'>Jarvis Customer Portal Api integration.</div>
        
            <span><i className="fas fa-trash"></i></span>
        </li>
        <li className="draggable todo-child" draggable="true">
            
            <div className='todo-date'>
                <p>01 Mar 22:10 PM</p>
            </div>
            <div className='todo-task'>Jarvis Customer Portal Api integration.</div>
            <span><i className="fas fa-trash"></i></span>
        </li>
        <li className="draggable todo-child" draggable="true">
            
            <div className='todo-date'>
                <p>01 Mar 22:10 PM</p>
            </div>
            <div className='todo-task'>Jarvis Customer Portal Api integration.</div>
            <span><i className="fas fa-trash"></i></span>
        </li>
        <li className="draggable todo-child" draggable="true">
            
            <div className='todo-date'>
                <p>01 Mar 22:10 PM</p>
            </div>
            <div className='todo-task'>Jarvis Customer Portal Api integration.</div>
            <span><i className="fas fa-trash"></i></span>
        </li>
        
    </div>
  )
}

export default TodoCard;