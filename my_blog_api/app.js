// importing express package
// require keyword here is simply taking the "express" in node_modules
const express = require("express");
// to initialize our app
const app = express()

// import our Post class
const Post = require("./api/models/posts")
// initialize our object
const postsData = new Post()




// making  a request with method: GET
// Endpoint: /api/posts Method: GET
app.get("/api/posts", (req, res)=>{
    res.status(200).send(postsData.get())
})


// server launch
app.listen(3000, ()=>console.log("Listening on http://localhost:3000"))