import React from "react";
import "./ToDoSearch.css";

function ToDoSearch(){
    return (
        <React.Fragment>
            <input className="TodoSearch" placeholder="Escribe algo"/>
        </React.Fragment>
    );
}

export { ToDoSearch };