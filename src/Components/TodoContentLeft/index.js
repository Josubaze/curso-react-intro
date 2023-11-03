import React from 'react'
import './TodoContentLeft.css'

function TodoContentLeft({children}) {
  return (
    <div className='col content-left'>{children}</div>
  )
}

export  {TodoContentLeft}