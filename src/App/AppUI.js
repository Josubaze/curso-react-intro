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
            defSearchedTodo,
            defCompleteTodo,
            defDeleteTodo,
            openModal,
            reset,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoContainer>

                <TodoContentLeft>

                    <TodoImg/>
                    <TitleCreate/>
                    <InputCreate/>

                </TodoContentLeft> 


                <TodoContentRight>  

                    {allCompleted && reset  ? (
                        <>
                        <TodoImgSuccessful />
                        <TodoSuccessful/>
                        <TodoButtonAdd/>
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

                            { !loading && defSearchedTodo.length === 0
                                ?(
                                    <TodosEmpy/>
                                ): 
                                null
                            }

                            {defSearchedTodo.map(todo => 
                            <TodoItem 
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete = {() =>
                                defCompleteTodo(todo.text)
                                }
                                onDelete = { () => 
                                defDeleteTodo(todo.text)
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