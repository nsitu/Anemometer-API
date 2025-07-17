import express from "express";
const app = express();

app.use('/',express.static('./public')) 

app.get("/api/datetime", (req, res) => { 
    res.send({
        datetime: new Date()
    }) 
}); 

app.listen(80, () => { 
    console.log(`Express is now Live.`)
}); 


