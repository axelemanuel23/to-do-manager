import React from "react";
import "./ToDoItem.css";

function ToDoItem({text, completed, onComplete}){
    return (
        <React.Fragment>
            <li className="TodoItem">
                <span
                    className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                    onClick={onComplete}
                >
                    C
                </span>
                <p 
                    className = {`TodoItem-p ${completed && "TodoItem-p--complete"}`}
                >
                        {text}
                </p>
                <span
                    className="Icon Icon-delete"
                    //onClick={onDelete}
                >
                    X
                </span>
            </li>
        </React.Fragment>
    )
}

export { ToDoItem };