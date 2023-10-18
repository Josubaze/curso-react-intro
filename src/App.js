import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text : 'Cortar cebollas', completed : true},
  {text : 'Tomar el curso intro de React.js', completed : false},
  {text : 'Llorar con la llorona', completed : false},
  {text : 'Ganar el partido contra Argentina', completed : false},
]

function App() {
  return (
    <React.Fragment>
      
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

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default  App;