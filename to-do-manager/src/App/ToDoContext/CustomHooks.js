import React from "react";
import axios from "axios";

function useLocalStorage(){
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(true);
    const [ todos, setTodos ] = React.useState([]);
    React.useEffect(() => {
            const getTodos = async () => {
                try{
                    const response = await axios.get("https://nodejs-backend-arch.vercel.app/api/v1/todomanager", {
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "APIKEY": "axel",
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