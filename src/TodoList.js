import './style.css'

function TodoList({children}) {
  return (
    <div className='row m-0'>
       <div className='col-10 offset-1 col-md-8 offset-md-2 container-list'>
          <ul className='task-list '>
            {children}
          </ul>
       </div>
    </div>
  )
}

export  {TodoList}