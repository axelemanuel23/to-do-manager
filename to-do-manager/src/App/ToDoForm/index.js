import React from "react";
import { TodoContext } from "../ToDoContext/ToDoContext";

function TodoForm(){
    const [ newTodoValue, setNewTodoValue ] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {

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
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
                <button></button>
            </div>
        </form>
    )
}

export { TodoForm }