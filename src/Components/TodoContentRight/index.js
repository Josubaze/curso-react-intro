import React from 'react'
import './TodoContentRight.css'

function TodoContentRight({children}) {
  return (
    <div className='col-lg-6 content-rigth'>{children}</div>
  )
}

export  {TodoContentRight}