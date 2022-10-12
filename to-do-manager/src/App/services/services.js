const axios = require("axios");

async function getTodos(){
    try{
      const res = await axios.get("https://exampleeapp.herokuapp.com/api/v1/todomanager", {
        headers: {
          "APIKEY": "axel"
        }
      })
      return res.data.data;
    }catch(err){
      console.log(err)
    }
}

export { getTodos }