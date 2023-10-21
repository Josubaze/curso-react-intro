import './style.css';

function TodoCounter({total, completed}){
    return(
        <div className='row m-0'>
          <div className='col-8 offset-3'>
            <h1 className='title-counter-h1'>You have completed</h1>
            <p className='title-counter-p'>{completed} de {total} Task</p>
          </div>
        </div>
    );
      
  }

export {TodoCounter}