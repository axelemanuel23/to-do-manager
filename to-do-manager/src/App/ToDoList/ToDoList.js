import React from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList({todos, setTodos}){
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
        console.log(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice([todoIndex], 1);
        setTodos(newTodos);
    }

    return (
        <React.Fragment>
            <section>
                <ul>
                    {todos.map((todo) => (
                        <ToDoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </ul>
            </section>
           
        </React.Fragment>
    );
}

export { ToDoList };