import './style.css';
function TodoButtonAdd() {
  return (
    <div className='row m-0'>
      <div className='contain-btn col offset-2 offset-md-4'>
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
    </div>
  )
}

export  {TodoButtonAdd}