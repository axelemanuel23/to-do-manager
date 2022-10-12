import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
import { useApiTodos } from './CustomHooks/CustomHooks';
import { getTodos } from './services/services';

const defaultTodos = [
    { _id: 1, text: "cortar cebolla hardcodeado", completed: true},
    { _id: 2,text: "comprar pan", completed: false}
  ]

function App() {

  React.useEffect(async () => {
    let initialState = [];
    try{
        const apitodos = await getTodos();
        if(!apitodos){
            initialState = defaultTodos;
        }else{
            initialState = apitodos;
        }
        saveTodo(initialState);
    }catch(err){
        console.log(err)
    }
  })
  
  //States
  const [todos, saveTodo] = useApiTodos(defaultTodos);
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
            setTodos={saveTodo}
          />
          <CreateToDoButton/>
    </React.Fragment>
  );
}

export { App };
