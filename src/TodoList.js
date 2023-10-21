import './style.css'

function TodoList({children}) {
  return (
    <div className='row m-0'>
       <div className='col-8 offset-2'>
          <ul className='task-list'>
            {children}
          </ul>
       </div>
    </div>
  )
}

export  {TodoList}