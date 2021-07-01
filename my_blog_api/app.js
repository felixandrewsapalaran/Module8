// importing express package
// require keyword here is simply taking the "express" in node_modules
const express = require("express");
// to initialize our app
const app = express()

// created a list of post
const posts = [{
    "id": "1581461442206",
    "title": "This is a New Blog Post",
    "content": "This is the content! ",
    "post_image": "uploads/post-image-1581461442199.jpg",
    "added_date": "1581461442206"
}]



// making  a request with method: GET
// Endpoint: /api/posts Method: GET
app.get("/api/posts", (req, res)=>{
    res.status(200).send(posts)
})


// server launch
app.listen(3000, ()=>console.log("Listening on http://localhost:3000"))