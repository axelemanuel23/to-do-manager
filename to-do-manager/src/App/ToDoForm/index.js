import React from "react";
import { TodoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function TodoForm(){
    const [ newTodoValue, setNewTodoValue ] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setNewTodoValue(""),
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar cebollas"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
                <button></button>
            </div>
        </form>
    )
}

export { TodoForm }