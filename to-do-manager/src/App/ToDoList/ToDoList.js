import React from "react";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../ToDoContext/ToDoContext";
import { TodoError } from "../ToDoError";
import { TodoLoading } from "../ToDoLoading";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList(){
    const { searchedTodos, completeTodo, deleteTodo, error, loading } = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
            <section>
                <ul>
                    { error && <TodoError error={error}/> }
                    { loading && <TodoLoading/> }
                    { (!loading && !searchedTodos.length) && <EmptyTodos/> }
                    {
                        searchedTodos.map((todo) => (
                            <ToDoItem
                                key={todo._id}
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