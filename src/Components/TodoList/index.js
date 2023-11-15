import './TodoList.css'

function TodoList({children}) {
  return (
          <ul className='container-task'>
            {children}
          </ul>
  )
}

export  {TodoList}