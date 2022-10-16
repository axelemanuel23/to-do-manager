import React from "react";
import { useLocalStorage } from "../CustomHooks/CustomHooks";

const TodoContext = React.createContext();

function TodoProvider(props){
    const [ todos, setTodos ] = useLocalStorage();
    const [ searchValue, setSearchValue ] = React.useState("");
    const [ openModal , setOpenModal ] = React.useState(false);
  
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
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text: text
      });
      setTodos(newTodos);
  }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice([todoIndex], 1);
        setTodos(newTodos);
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
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };