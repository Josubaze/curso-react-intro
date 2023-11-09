import React from 'react';

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
import { Footer } from '../Components/Footer';
import { TodoButtonAdd } from '../Components/TodoButtonAdd';
import {TodoImgSuccessful} from '../Components/TodoImgSuccessful';
import { TodoSuccessful } from '../Components/TodoSuccessful';

import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodosEmpy } from '../Components/TodosEmpy';

import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';

import { TodoContext } from '../Components/TodoContext';

function AppUI(){

    const {
            loading,
            error,
            allCompleted,
            searchedTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoContainer>

                <TodoContentLeft>

                    <TitleCreate/>
                    <InputCreate/>
                    <ButtonCreate/>
                    <TodoImg/>

                </TodoContentLeft> 


                <TodoContentRight>  

                    {allCompleted ? (
                        <>
                        <TodoImgSuccessful />
                        <TodoSuccessful/>

                        <TodoButtonAdd/>

                        <Footer/>
                        </>
                    ) : (
                        <>
    
                        <TodoCounter/>

                        <TodoSearch/>
                    
                        
                        <TodoList>
                            { loading
                                ?(                               
                                    <TodosLoading/>
                                ): null
                            }
                            { error
                                ?(
                                    <TodosError/>
                                ): null
                            }

                            { !loading && searchedTodo.length === 0
                                ?(
                                    <TodosEmpy/>
                                ): 
                                null
                            }

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
                                allCompleted(todo.completed)
                                }
                            />
                            )}

                        </TodoList>
                        
                        <TodoButtonAdd/>
            
                        </>
                    )} 
                </TodoContentRight> 

                <Footer/>
                
                

            </TodoContainer>       
            { openModal ?(
                <Modal>
                    <TodoForm/>
                </Modal>
            ): null
            }
        </>
    );
}

export { AppUI };