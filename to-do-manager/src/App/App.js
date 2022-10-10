import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
const { ToDoService } = require("./services/services");



function useGetTodos(initialValue){
  const service = new ToDoService();
  const todosApi = service.getTodos();
  let initialTodos = [];
    
  if(!todosApi){
    initialTodos = initialValue;
  }else{
    initialTodos = todosApi;
  }
  const [ todos, setTodos ] = React.useState[initialTodos];

  const saveTodos = (todo) => {
    service.saveTodos(todo);
    const todoIndex = todos.findIndex(item => item._id === todo._id);
    let updatedtodos = [...todos];
    updatedtodos.splice([todoIndex], 1);
    updatedtodos = {
      todo,
      ...updatedtodos
    }
    setTodos(updatedtodos)
  }

  return [ todos , saveTodos]
}



function App() {
  
  const defaultTodos = [   
    { _id: 1, text: "cortar cebolla hardcodeado", completed: false },
    { _id: 2, text: "cortar carne", completed: false },
  ];

  //States
  const [todos, saveTodos] = useGetTodos(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
          <ToDoCounter
            completed={completedTodos}
            total={totalTodos}
          />
           <ToDoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <ToDoList
            todos={searchedTodos}
            setTodos={saveTodos}
          />
          <CreateToDoButton/>
    </React.Fragment>
  );
}

export { App };
