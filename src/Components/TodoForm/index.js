import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {

    const {
        addNewTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodo, setNewTodo] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addNewTodo(newTodo);
        console.log(newTodo);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodo(event.target.value);
    }
  return (
    <form className='TodoForm-Create' onSubmit={ onSubmit }>
        <label>Create your task!</label>
        <textarea
        placeholder='Example: Go to the plaza in the afternoon'
        value={newTodo}
        onChange={onChange}
        />
        <div className='TodoForm-buttonContainer'>
        <button
            type='button' 
            className='btn btn-outline-secondary'
            onClick={onCancel}
            >
                Cancel
            </button>
            <button
            type='submit' 
            className='btn btn-primary'
            >
                Create
            </button>
        </div>
        
    </form>
    
  )
}

export  { TodoForm }