import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";

async function getTodos(){
  try{
      const res = await fetch("https://exampleeapp.herokuapp.com/api/v1/todomanager",
      {
          headers: {
              "APIKEY": "axel"
          }
      })
      const body = await res.json();
      console.log(body.data);
      return body.data;
  }catch(err){
      console.log(err)
  }
} 



function App() {
  const defaultTodos = getTodos();
  //States
  const [todos, setTodos] = React.useState(defaultTodos);
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
            setTodos={setTodos}
          />
          <CreateToDoButton/>
    </React.Fragment>
  );
}

export { App };
