import React from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

const TodoContext =  React.createContext();

function TodoProvider({children}){

    const { item: todos,
        saveItem: saveTodos,
        error,
        loading
    } = useLocalStorage('TODOS_V1', [] );
    const [searchValue, setSearchValue] = React.useState('');
    const [allCompleted, setAllCompleted] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(true);

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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            allCompleted,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            allCompletedTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };