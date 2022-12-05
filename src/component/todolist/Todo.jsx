import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }


  return (
    <div class="row batas">
      <div class="col-3">
        <input class="form-check-input" type="checkbox" onClick={handleCheckboxClick} />
      </div>
      <div class="col-5">
        <a
          style={{ textDecoration: todo.completed ? "line-through" : null }}>{todo.task}</a>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" onClick={handleRemoveClick}>X</button>
      </div>
    </div>
  );
}

export default Todo