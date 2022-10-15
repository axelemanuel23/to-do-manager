import React from "react";
import { TodoContext } from "../ToDoContext/ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <React.Fragment>
            <input
                className="TodoSearch"
                placeholder="Filtrar Tareas"
                value={searchValue}
                onChange={onSearchValueChange}/>
        </React.Fragment>
    );
}

export { ToDoSearch };