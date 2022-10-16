import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
import { Modal } from "./Modal/index";
import { TodoContext } from "./ToDoContext/ToDoContext";
import { TodoForm } from './ToDoForm';

function App() {
  const { openModal } = React.useContext( TodoContext );
  return (
    <React.Fragment>
        <ToDoCounter/>
        <ToDoSearch/>
        <ToDoList/>
        { 
        !!openModal && 
          (
            <Modal>
              <TodoForm />
            </Modal>
          )
        }
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export { App };
