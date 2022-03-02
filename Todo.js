import React from 'react';
import '../css/Todo.css';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="wrapper">
        <header>Todo App</header>
        <TodoForm />
        <TodoList />
        <TodoFooter />
    </div>
  )
}

export default Todo;