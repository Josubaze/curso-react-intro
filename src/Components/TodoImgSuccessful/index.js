import React from 'react'
import image from "../../Assets/img/successful.png";
import './TodoImgSuccessful.css';

function TodoImgSuccessful() {
  return (
    <div className='row m-0'>
        <div className='col-8 offset-2'>
            <figure className='figure-task-successful'>
                <img className='img-task-successful' src={image} alt='Task'></img>
            </figure>
        </div>
    </div>
  )
}

export  {TodoImgSuccessful}