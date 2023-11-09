import React from 'react'
import  './TodosEmpy.css'
import { MdAddTask } from "react-icons/md";
function TodosEmpy() {
  return (
    <div className='row text-center'>
        <div className='col'>
            <p className='Todo-infoEmpy'>¡Create a new task!</p>
            <span className='icon-addTask'><MdAddTask /></span>
        </div>
    </div>
    
  )
}

export  {TodosEmpy}