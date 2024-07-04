import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const API_URL = "https://quotes15.p.rapidapi.com/quotes/random/";
const yourAPIKey = "694ec89f46msh3b4691244d5d3e6p1ef530jsn565b744f5ab6";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", async (req, res) => {
  
    try {
      const result = await axios.get(API_URL,{
        params: {
          language_code: 'en',
               },
               headers: {
                'x-rapidapi-key': '694ec89f46msh3b4691244d5d3e6p1ef530jsn565b744f5ab6',
                'x-rapidapi-host': 'quotes15.p.rapidapi.com'
              }
      });
    //   const desc = result.data.content;
    //   console.log(desc);
      res.render("index.ejs",{description: result.data.content, name: result.data.name,});

    } 
    catch (error) {
 res.status(404).send(error.message);
}
});
  


app.listen(3000,()=>{console.log("Server Started");});