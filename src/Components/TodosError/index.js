import React from 'react'
import './TodosError.css'
import { BiError } from "react-icons/bi";
function TodosError() {
  return (
    
    <div className='row text-center'>
        <div className='col'>
            <p className='Todo-infoError'>¡Ops An error has occurred​!</p>
            <span className='icon-Error'><BiError /></span>
        </div>
    </div>
  )
}

export  {TodosError}