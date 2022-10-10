import React from 'react';
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
import axios from "axios";


function App() {
  async function getTodos(){
    try{
      const res = await axios.get("https://exampleeapp.herokuapp.com/api/v1/todomanager", {
        headers: {
          "APIKEY": "axel"
        }
      })
      console.log(res.data.data);
      setTodos(res.data.data);
    }catch(err){
      console.log(err)
    }
  }

  getTodos()

  React.useEffect(() => {
    getTodos();
  })

  const defaultTodos = [
    { text: "cortar cebolla hardcodeado", completed: true},
    { text: "comprar pan", completed: false}
  ]
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
