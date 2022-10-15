import React from "react";
import "./ToDoCounter.css";
import { TodoContext } from '../ToDoContext/ToDoContext';

function ToDoCounter(){
    const { completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h1 className="TodoCounter-title">
                To Do Manager
            </h1>
            <h2 className="TodoCounter-subtitle">
                Tienes {completedTodos} de {totalTodos} tareas completadas
            </h2>
        </React.Fragment>
    );
}

export { ToDoCounter };