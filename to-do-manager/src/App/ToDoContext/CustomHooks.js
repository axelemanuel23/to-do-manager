import React from "react";
import axios from "axios";

function useLocalStorage(){
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(true);
    const [ todos, setTodos ] = React.useState([]);

    const url = "https://exampleeapp.herokuapp.com/api/v1/todomanager";

    React.useEffect(() => {
            const getTodos = async () => {
                try{
                    const response = await axios.get(url, {
                        mode: "cors",
                        credential: "include",
                        headers: {
                            "APIKEY": "axel"
                        }
                    });
                    const newTodos = [...response.data.data];
                    console.log(newTodos);
                    setTodos(newTodos)
                }catch(err){
                    console.log("error en la peticion");
                    setError(err);
                }finally{
                    setLoading(false)
                }
            }
            getTodos();
    }, []);

    return [ todos, setTodos, error, loading ]
}

export { useLocalStorage }