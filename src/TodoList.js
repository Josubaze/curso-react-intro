import './style.css'

function TodoList({children}) {
  return (
    <div className='row m-0'>
       <div className='col-10 offset-1'>
          <aside className='scroll-container'>
            <ul className='task-list '>
              {children}
            </ul>

          </aside>
          
       </div>
    </div>
  )
}

export  {TodoList}