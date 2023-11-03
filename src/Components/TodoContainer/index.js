import React from 'react'

function TodoContainer({children}) {
  return (
    <div className='container-fluid row row-cols-1 row-cols-lg-2'>
        {children}
    </div>
  )
}

export  {TodoContainer}