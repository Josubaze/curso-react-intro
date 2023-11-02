import './TodoButtonAdd.css';
function TodoButtonAdd() {
  return (
  
    <button className="CreateTodoButton"
        onClick={
          (event) =>{ 
            console.log('pulsaste boton')
            console.log(event.target)
          }
        }>+</button> 
  )
}

export  {TodoButtonAdd}