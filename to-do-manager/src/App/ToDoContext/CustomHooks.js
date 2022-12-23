import React from "react";
import axios from "axios";

function useLocalStorage(){
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(true);
    const [ todos, setTodos ] = React.useState([]);
    React.useEffect(() => {
            const getTodos = async () => {
                try{
                    const response = await axios.get(process.env.APIURL, {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "APIKEY": process.env.APIKEY,
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