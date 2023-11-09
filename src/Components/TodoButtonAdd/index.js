import './TodoButtonAdd.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoButtonAdd() {
  const {
    setOpenModal,
    openModal,
  } = React.useContext(TodoContext)
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(!openModal);
        }
      }
    >+</button>
  );
}


export  {TodoButtonAdd}