// importing express package
// require keyword here is simply taking the "express" in node_modules
const express = require("express");
// to initialize our app
const app = express()


// request and response
app.get("/", (req, res)=>{
    res.status(200).send("Hello World")
})


// server launch
app.listen(3000, ()=>console.log("Listening on http://localhost:3000"))