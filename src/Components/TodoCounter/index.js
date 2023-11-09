import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
      completedTodos: completed,
      totalTodos: total,
    } = React.useContext(TodoContext);
    
    return(
        <div className='row m-0'>
          <div className='col-11 offset-1 col-md-8 offset-md-2 offset-lg-2'>
            <h1 className='title-counter-h1 text-center'>You have completed</h1>
            <p className='title-counter-p text-center'>{completed} de {total} Task</p>
          </div>
        </div>
    );
      
  }

export {TodoCounter}