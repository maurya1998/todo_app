import React from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  return (
    <div className='ListWrapper'>
        <input type="radio" name='slider'id='pending' defaultChecked={true}></input> 
        <input type='radio' name='slider' id='complete'/>
        <nav>
            <label htmlFor="pending" className='pending'><i className='fas fa-clock'></i>pending</label>
            <label htmlFor="complete" className='complete'><i className='fas fa-clipboard-check'></i>completed</label>
            <div className='slider'></div>
        </nav>
        <section className='container'>
            <div className='content pending-container'>
            <ul className="todolist" id="list">
                <TodoCard />
            </ul>
            </div>
            <div className='content complete-container'></div>
        </section>

        
    </div>
  )
}

export default TodoList