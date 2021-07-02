// path for data.json
const PATH = "./data.json"
// imnport this to read data from file
const fs = require('fs')

class Post {
    get() {
        // Get Posts api
        return this.readData() // use readData() function to return and read data
    }

    getIndividualBlog() {
        // Get One Blog Post api
    }

    add() {
        // Add new Post api
    }

    // readData imports data.json and exported it as json
    readData() {
        // pass the PATH we specied above
        let rawdata = fs.readFileSync(PATH)
        // parse the data
        let posts = JSON.parse(rawdata)
        return posts
    }
}


// Everytime you import a module that module have to be exported
module.exports = Post // so this exports the module and app.js imports and initialize it