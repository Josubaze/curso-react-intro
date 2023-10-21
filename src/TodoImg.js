import './style.css';
import image from "./img/task.png";

function TodoImg() {
  return (
    <figure className='figure-task'>
      <img className='bg-task' src={image} alt='Task'></img>
    </figure>
    
  )
}

export  {TodoImg}