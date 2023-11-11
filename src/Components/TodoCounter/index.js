import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
      completedTodos: completed,
      totalTodos: total,
    } = React.useContext(TodoContext);
    
    return(
        <div className='row m-0 '>
          <div className='col col-sm-11 offset-1 col-md-8 offset-md-2 offset-lg-2'>
            <h1 className='title-counter title-counter--h1'>You have completed</h1>
            <div className='title-counter title-counter--p'>
                <p className='counter ps pe-2'>{completed}</p>
              de
                <p className='counter ps-2 pe-2'>{total}</p>  
              Task
            </div>
          </div>
        </div>
    );
      
  }

export {TodoCounter}