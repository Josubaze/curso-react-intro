import './TodoList.css'

function TodoList({children}) {
  return (
    <div className='row m-0'>
       <div className='col-11 offset-1 col-md-10 offset-md-1'>
          <ul className='container-task'>
            {children}
          </ul>
       </div>
    </div>
  )
}

export  {TodoList}