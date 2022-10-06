import React from "react";
import "./ToDoItem.css";

function ToDoItem(props){
    return (
        <React.Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>C</span>
                <p className={`TodoItem-p ${props.completed && "TodoItem-p--active"}`}>{props.text}</p>
                <span className="Icon Icon-delete">X</span>
            </li>
        </React.Fragment>
    )
}

export { ToDoItem };