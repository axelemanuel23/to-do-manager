const axios = require("axios");

async function getTodos(apikey){
    try{
      const res = await axios.get("https://exampleeapp.herokuapp.com/api/v1/todomanager", {
        headers: {
          "APIKEY": apikey
        }
      })
      const todos = res.data.data;
      console.log(todos);
      return todos;
    }catch(err){
      console.log(err)
    }
}

module.exports = { getTodos }