import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

const iconTypes = {
    'completed' :(color) => <FaCheck className='icon-svg' fill={color}/>,
    'delete' :(color) => <AiFillDelete className='icon-svg' fill={color}/>,
};


function TodoIcon({ type, color, onClick, onAllCompleted}) {
    
    const handleOnClick = () => {
        onClick(); // Ejecuta el evento onComplete
        onAllCompleted(); // Ejecuta el evento onAllCompleted
    };
    return (
    <span
        className={`bx-container bx-container-${type}`}
        onClick={handleOnClick}
        
    > 
        {iconTypes[type](color)}
    </span>
  )
}

export  {TodoIcon}