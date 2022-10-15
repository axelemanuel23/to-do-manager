import React from "react";
import { TodoContext } from "../ToDoContext/ToDoContext";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList(){
    const { searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
            <section>
                <ul>
                    {
                        searchedTodos.map((todo) => (
                            <ToDoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))
                    }
                </ul>
            </section>
        </React.Fragment>
    );
}

export { ToDoList };