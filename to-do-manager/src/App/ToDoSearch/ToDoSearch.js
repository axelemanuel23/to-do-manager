import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
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