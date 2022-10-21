import React from "react";
import "./ToDoLoading.css"

function TodoLoading(){
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodoLoading }