import React from "react";

function useApiTodos(initialValue){

    // const [error, setError ] = React.useState(false);
    // const [loading, setLoading ] = React.useState(true);
    const [todos, setTodos] = React.useState(initialValue);

    function saveTodo(todo){
        const updatedTodos = [...todos];
        updatedTodos.push(todo);
        setTodos(updatedTodos)
    }

    return [todos, saveTodo]
}

export { useApiTodos }