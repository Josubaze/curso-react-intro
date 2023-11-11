import './InputCreate.css'
import React from 'react';
import { TodoContext } from '../TodoContext';


function InputCreate() {
  const {
    addNewTodo,
  } = React.useContext(TodoContext);

  const [newTodo, setNewTodo] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addNewTodo(newTodo);
    setNewTodo('');
  }

  const onChange = (event) => {
    setNewTodo(event.target.value);
  }

  return (  
    <div className="row">
       <div className="col-8 offset-2">
        <form className="d-flex input-group form-create-container" onSubmit={ onSubmit }>
          <input type="text" className="form-control aling-center form-input-create" placeholder='Example: Go to the plaza in the afternoon' aria-describedby="basic-addon3 basic-addon4" 
            onChange={ onChange }
            value={ newTodo }>
          </input>
          <button type="submit" className="btn btn-outline-warning m-">Create</button>
          </form>
       </div>
    </div>
 
  )
}

export  {InputCreate}

