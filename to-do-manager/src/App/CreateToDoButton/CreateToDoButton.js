import React from "react";
import "./CreateToDoButton.css";
import { TodoContext } from "../ToDoContext/ToDoContext";

function CreateToDoButton(){
    const { setOpenModal } = React.useContext(TodoContext);
    const onClickButtom = () => {
        setOpenModal(prev => !prev);
    }
    return (
        <React.Fragment>
            <button className="CreateTodoButton" onClick={onClickButtom}>+</button>
        </React.Fragment>
    )
}

export { CreateToDoButton };