import React from "react";
import "./ToDoCounter.css";

function ToDoCounter(){
    return (
        <React.Fragment>
            <h1 className="TodoCounter-title">
                To Do Manager
            </h1>
            <h2 className="TodoCounter-subtitle">
                Tienes 2 de 4 tareas completadas
            </h2>
        </React.Fragment>
    );
}

export { ToDoCounter };