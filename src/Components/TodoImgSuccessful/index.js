import React from 'react'
import image from "../../Assets/img/icon.png";
import './TodoImgSuccessful.css';

function TodoImgSuccessful() {
  return (
    <div className='row m-0'>
        <div className='col-7 offset-3 col-md-6 offset-md-4'>
            <figure className='figure-icon-task'>
                <img className='icon-task-successful' src={image} alt='Task'></img>
            </figure>
        </div>
    </div>
  )
}

export  {TodoImgSuccessful}