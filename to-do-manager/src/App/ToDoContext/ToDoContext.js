import React from "react";
import { useLocalStorage } from "./CustomHooks";
import axios from "axios";

const TodoContext = React.createContext();

function TodoProvider(props){
    const [ todos, setTodos, error, loading ] = useLocalStorage();
    const [ searchValue, setSearchValue ] = React.useState("");
    const [ openModal , setOpenModal ] = React.useState(false);

    const url = "https://axelemanuel23githubio-backend-production.up.railway.app/api/v1/todomanager";  
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
    
    const addTodo = (text) => {
      try{
        const postTodo = async () => {
          const newTodo = {
            text: text,
            completed: false,
          }
          const newTodos = [...todos];
          newTodos.push(newTodo);
          const response = await axios.post(url, newTodo, {
            mode: "cors",
            credentials: "include",
            headers: {
              "APIKEY": "axel",
          }});
          if(response.status===201){
            setTodos(newTodos);
          }
        }
        postTodo();
      }catch(err){
        console.log(err);
      }      
  }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        const updatedTodo = newTodos[todoIndex];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        const updateTodo = async () => {
          try{
            const response = await axios.patch(url + updatedTodo._id, 
                  updatedTodo 
                ,
              {
                mode: "cors",
                credentials: "include",
                headers: {
                  "APIKEY": "axel",
              }});
            if(response.status===200){
              setTodos(newTodos);
            }
          }catch(err){
            console.log(err);
          }
        }
        updateTodo();
    }
    const deleteTodo = (text) => {
        try{
          const eraseTodo = async () => {
            const todoIndex = todos.findIndex(todo => todo.text === text);
            const newTodos = [...todos];
            const deletedTodo = newTodos[todoIndex];
            const response = await axios.delete(url + deletedTodo._id, {
              mode: "cors",
              credentials: "include",
              headers: {
                "APIKEY": "axel",
            }})
            if(response.status===200){
              newTodos.splice([todoIndex], 1);
            setTodos(newTodos);
            }
          }
          eraseTodo();
        }catch(err){
          console.log(err)
        }
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            setOpenModal,
            openModal,
            addTodo,
            error,
            loading,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };