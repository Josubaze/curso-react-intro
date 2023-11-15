import React from 'react'
import './TodoContainer.css'
function TodoContainer({children}) {
  return (
    <div className='container-fluid row row-cols-1 row-cols-lg-2 todoContainer'>
        {children}
    </div>
  )
}

export  {TodoContainer}