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
  {text : 'Aprender estados derivados', completed : true},
  {text : 'Aprender a borrar un item', completed : false},
  {text : 'Aprender a agregar un nuevo item', completed : false},

]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodo = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

  const completeTodo = (text) => {
    const newTodo = [...todos]
    const todoIndex = newTodo.findIndex(
      (todo) => todo.text == text
    );
    newTodo[todoIndex].completed = 'true';
    setTodos(newTodo);
  }

  const deleteTodo = (text) => {
    const newTodo = [...todos]
    /*newTodo.filter((todo) => todo.text != text);* este se puede usar para concurrencias*/
    const todoIndex = newTodo.findIndex(
      (todo) => todo.text == text
    );
    newTodo.splice(todoIndex,1);
    setTodos(newTodo);
  }

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
          <TodoCounter
            completed={completedTodos} total={totalTodos}
          />

          <TodoSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />

          <TodoList>
            {searchedTodo.map(todo => 
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() =>
                  completeTodo(todo.text)
                }
                onDelete = { () => 
                  deleteTodo(todo.text)
                }
              />
            )}
          </TodoList>
        </div> 
        <div className='col offset-2 offset-md-4'>
          <TodoButtonAdd/> 
        </div> 
            
      </div>

      <FooterMessage/>       

    </div>
  );
}

export default  App;