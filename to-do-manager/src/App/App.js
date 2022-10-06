import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";

function App() {
  return (
    <React.Fragment>
          <ToDoCounter />
           <ToDoSearch />
            <ToDoList/>
          <CreateToDoButton/>
    </React.Fragment>
  );
}

export { App };
