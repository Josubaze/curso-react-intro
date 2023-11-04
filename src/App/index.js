import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { AppUI } from './AppUI';


function App() {

  const { item: todos,
          saveItem: saveTodos,
          error,
          loading
        } = useLocalStorage('TODOS_V1', [] );
  const [searchValue, setSearchValue] = React.useState('');
  const [AllCompleted, setAllCompleted] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !! todo.completed
  ).length;
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
    <AppUI
      loading = { loading }
      error = { error }
      AllCompleted = { AllCompleted }
      completedTodos = { completedTodos }
      totalTodos = { totalTodos }
      searchValue = { searchValue }
      setSearchValue = { setSearchValue }
      searchedTodo = { searchedTodo }
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }
      allCompletedTodo = { allCompletedTodo }
    />
  );
}

export default  App;