import { TodoContainer } from '../Components/TodoContainer';
import { TodoContentLeft } from '../Components/TodoContentLeft';
import { TodoContentRight } from '../Components/TodoContentRight';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoImg } from '../Components/TodoImg';
import { TitleCreate } from '../Components/TitleCreate';
import { InputCreate } from '../Components/InputCreate';
import { ButtonCreate } from '../Components/ButtonCreate';
import { FooterMessage } from '../Components/FooterMessage';
import { TodoButtonAdd } from '../Components/TodoButtonAdd';
import {TodoImgSuccessful} from '../Components/TodoImgSuccessful';
import { TodoSuccessful } from '../Components/TodoSuccessful';

function AppUI({
    AllCompleted,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,
    allCompletedTodo,
}){
    return (
        <TodoContainer>

            <TodoContentLeft>

                <TitleCreate/>
                <InputCreate/>
                <ButtonCreate/>
                <TodoImg/>

            </TodoContentLeft> 

            <TodoContentRight>  

                {AllCompleted ? (
                    <>
                    <TodoImgSuccessful />
                    <TodoSuccessful/>
                    <TodoButtonAdd/>
                    <FooterMessage/>
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
            </TodoContentRight> 
            <FooterMessage/>   
            
        </TodoContainer>       
        
    );
}

export { AppUI };