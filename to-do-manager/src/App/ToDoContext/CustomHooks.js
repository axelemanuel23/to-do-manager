import React from "react";
import axios from "axios";

function useLocalStorage(){
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(true);
    const [ todos, setTodos ] = React.useState([]);

    const url = process.env.APIURL + "/api/v1/todomanager";
    const apikey = process.env.APIKEY;

    React.useEffect(() => {
            const getTodos = async () => {
                try{
                    const response = await axios.get(url, {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "APIKEY": apikey,
                        }
                    });
                    const newTodos = [...response.data.data];
                    setTodos(newTodos)
                }catch(err){
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