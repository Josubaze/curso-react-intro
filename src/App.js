import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoImg } from './TodoImg';
import { TitleCreate } from './TitleCreate';
import { InputCreate } from './InputCreate';
import { ButtonCreate } from './ButtonCreate';
import { FooterMessage } from './FooterMessage';


const defaultTodos = [
  {text : 'Cortar cebollas', completed : true},
  {text : 'Tomar el curso intro de React.js', completed : false},
  {text : 'Llorar con la llorona', completed : false},
  {text : 'Hacer la tarea de fisica', completed : false},

]

function App() {
  return (
    <div className='container-fluid'> 

      {/* <NavbarTodo/> */}

      <div className='row'>
        <div className='col content-left'>
          <TitleCreate/>
          <InputCreate/>
          <ButtonCreate/>
          <TodoImg/>
        </div>

        <div className='col-6 content-rigth'>
          <TodoCounter completed={16} total={18}/>

          <TodoSearch/>

          <TodoList>
            {defaultTodos.map(todo => 
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            )}
          </TodoList>
        </div>
      </div>
      
      <FooterMessage/>       

    </div>
  );
}

export default  App;