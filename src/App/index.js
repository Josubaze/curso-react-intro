import React from 'react';
import { TodoCounter } from '../Components/TodoCounter/index';
import { TodoSearch } from '../Components/TodoSearch/index';
import { TodoList } from '../Components/TodoList/index';
import { TodoItem } from '../Components/TodoItem/index';
import { TodoImg } from '../Components/TodoImg/index';
import { TitleCreate } from '../Components/TitleCreate/index';
import { InputCreate } from '../Components/InputCreate/index';
import { ButtonCreate } from '../Components/ButtonCreate/index';
import { FooterMessage } from '../Components/FooterMessage/index';
import { TodoButtonAdd } from '../Components/TodoButtonAdd/index';
import {TodoImgSuccessful} from '../Components/TodoImgSuccessful/index';
import { TodoSuccessful } from '../Components/TodoSuccessful/index';

import { useLocalStorage } from '../Hooks/useLocalStorage';


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [] );
  const [searchValue, setSearchValue] = React.useState('');
  const [AllCompleted, setAllCompleted] = React.useState(false);

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
      (todo) => todo.text === text
    );
    newTodo[todoIndex].completed = 'true';
    saveTodos(newTodo);
  }

  const deleteTodo = (text) => {
    const newTodo = [...todos]
    /*newTodo.filter((todo) => todo.text != text);* este se puede usar para concurrencias*/
    const todoIndex = newTodo.findIndex(
      (todo) => todo.text === text
    );
    newTodo.splice(todoIndex,1);
    saveTodos(newTodo);
  }

  const allCompletedTodo = (completed) => {
    const newTodo = [...todos]
    const result = newTodo.every(
      (todo) => todo.completed === completed
    );
    setAllCompleted(result);
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
          {AllCompleted ? (
            <>
              <TodoImgSuccessful />
              <TodoSuccessful/>
              <TodoButtonAdd/>
            </>
          ) : (
            <>
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
                    onAllCompleted = { () => 
                      allCompletedTodo(todo.completed)
                    }
                  />
                )}
              </TodoList>
              <TodoButtonAdd/>

            </>
          )} 
        </div> 
        
      </div>
      <FooterMessage/>       
    </div>
  );
}

export default  App;