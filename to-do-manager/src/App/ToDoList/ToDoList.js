import React from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./ToDoList.css";

function ToDoList({todos, saveTodos}){

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo._id === id);
        const updatedtodo = todos[todoIndex];
        updatedtodo[todoIndex].completed = true;
        saveTodos(updatedtodo);
        console.log(updatedtodo);
    }

    // const deleteTodo = (_id) => {
    //     const todoIndex = todos.findIndex(todo => todo._id === _id);
    //     const newTodos = [...todos];
    //     newTodos.splice([todoIndex], 1);
    //     setTodos(newTodos);
    // }

    return (
        <React.Fragment>
            <section>
                <ul>
                    {todos.map((todo) => (
                        <ToDoItem
                            _id={todo._id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo._id)}
                            //onDelete={() => deleteTodo(todo._id)}
                        />
                    ))}
                </ul>
            </section>
           
        </React.Fragment>
    );
}

export { ToDoList };