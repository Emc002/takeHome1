import React from "react";
import Todo from "./Todo";

function TodoList({todos, toggleComplete,removeTodo}) {
  return (
    <div class="col-12">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete}
        removeTodo={removeTodo} />
      ))}

    </div>
  );
}

export default TodoList;