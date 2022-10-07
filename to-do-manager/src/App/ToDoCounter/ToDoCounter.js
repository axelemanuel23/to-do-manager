import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({completed, total}){
    return (
        <React.Fragment>
            <h1 className="TodoCounter-title">
                To Do Manager
            </h1>
            <h2 className="TodoCounter-subtitle">
                Tienes {completed} de {total} tareas completadas
            </h2>
        </React.Fragment>
    );
}

export { ToDoCounter };