const axios = require("axios");

 
class ToDoService {
    constructor(){
        this.baseUrl = "https://exampleeapp.herokuapp.com/api/v1/todomanager";
        this.configs = {
            headers: {
                "APIKEY": process.env.APIKEY || "axel"
            }
        }
    }      
    async getTodos(){
        try{
            const response = await axios.get(this.baseUrl, { ...this.configs });
            const data = response.data.data;
            return data;
        }catch(err){
            console.log(err);
        }
    }
    async deleteTodo(_id){
        try{    
            await axios.delete(this.baseUrl + _id, { ...this.configs });
        }catch(err){
            console.log(err);
        }
    }
    async saveTodo(todo){
        try{
            await axios.patch(this.baseUrl + todo._id , todo, { ...this.configs });  
        }catch(err){
            console.log(err);
        }

    }
}

// const service = new ToDoService();
// service.getTodos();

module.exports = { ToDoService };