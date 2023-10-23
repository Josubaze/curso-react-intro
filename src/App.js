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
import { TodoButtonAdd } from './TodoButtonAdd';


const defaultTodos = [
  {text : 'Cortar cebollas', completed : true},
  {text : 'Tomar el curso intro de React.js', completed : false},
  {text : 'Llorar con la llorona', completed : false},
  {text : 'Hacer la tarea de fisica', completed : false},

]

function App() {
  return (
    <div className='container-fluid'> 

      <div className='row row-cols-1 row-cols-lg-2'>
        <div className='col content-left'>
          <TitleCreate/>
          <InputCreate/>
          <ButtonCreate/>
          <TodoImg/>
        </div>

        <div className='col-lg-6 content-rigth'>
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

      <TodoButtonAdd/> 
      <FooterMessage/>       

    </div>
  );
}

export default  App;