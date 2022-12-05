import React, { useEffect, useState } from 'react';
import TodoForm from './component/todolist/TodoForm';
import TodoList from './component/todolist/TodoList';
import Todo from './component/todolist/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/mainStyles.css'
const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function Todoapp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

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
