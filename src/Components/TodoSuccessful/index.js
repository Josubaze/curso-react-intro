import React from 'react'
import './TodoSuccessful.css'

function TodoSuccessful() {
  return (
    <div className='row m-0'>
        <div className='col-7 offset-3 col-md-8 offset-md-3'>
            <h1 className='text-successful'>Congratulations You Completed the Tasks!</h1>
            <p className='text-reminder'>Don't forget to create new ones when you need them!</p>
        </div>
    </div>
    
  )
}

export  {TodoSuccessful}