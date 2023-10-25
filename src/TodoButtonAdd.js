import './style.css';
function TodoButtonAdd() {
  return (
    <div className='contain-btn'>
        <p className="text-button">ADD NEW TASK!</p>
        <i class='bx bx-right-arrow-alt'></i>
        <button class='bx bxs-plus-circle' 
        onClick={
          (event) =>{ 
            console.log('pulsaste boton')
            console.log(event.target)
          }
        }></button>  
    </div>

  )
}

export  {TodoButtonAdd}