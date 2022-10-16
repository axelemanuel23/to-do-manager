import React from "react";

function useLocalStorage(){
    // const [ error, setError ] = React.useState(false);
    // const [ loading, setLoading ] = React.useState(true);

    const [ todos, setItem ] = React.useState([]);

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem("TODOS_V1");
        let parsedItem;
        
        if(localStorageItem!==[]){
            localStorage.setItem("TODOS_V1", JSON.stringify([]));
            parsedItem = [];
        }else{
            parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
     }, []);
    
    function setTodos(newItem){
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem("TODO_V1", stringifiedItem);
        setItem(newItem);
    }

    return [ todos, setTodos]
}

export { useLocalStorage }