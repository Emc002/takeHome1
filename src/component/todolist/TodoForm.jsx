import React, {useState} from "react";
import { v4 as uuidv4} from 'uuid';

const TodoForm = ({addTodo}) =>{

  const [todo, setTodo] = useState({
    id:"",
    task:"",
    completed: false
    
  });


  function handleTaskinputChange(e){
    setTodo({...todo, task: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    if (todo.task.trim())
    {
      addTodo({...todo, id: uuidv4()});
      //reset
      setTodo({...todo, task: ""});
    }
     
  }

  return(
    <form onSubmit={handleSubmit}>
      <input class="form-control"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskinputChange}
      />
      <button class="btn btn22 btn-success" type="submit">SUBMIT</button>
    </form>

  );
}

export default TodoForm;