import React from "react";

function useLocalStorage(itemName, initialValue){
    // const [ error, setError ] = React.useState(false);
    // const [ loading, setLoading ] = React.useState(true);

    const [ todos, setItem ] = React.useState(initialValue);

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        }else{
            parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
     }, []);
    
    function setTodos(newItem){
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }

    return [ todos, setTodos]
}

export { useLocalStorage }