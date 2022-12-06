import React, { useState } from 'react';
import TodoForm from './component/todolist/TodoForm';
import TodoList from './component/todolist/TodoList';
import Todo from './component/todolist/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/mainStyles.css'

function Todoapp() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id == id) {
          console.log(todo.completed)
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div class="container-fluid container22">
      <div class="row">
        <div class="col-6 WESC">
          <h1>REACT TODO</h1>
          <TodoForm addTodo={addTodo} />
        </div>
        <div class="col-6 RESC table-responsive">
          <h1> LIST TO DO</h1>
          <TodoList todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo} />
      </div>

      </div>

    </div>

  );
};

export default Todoapp;
