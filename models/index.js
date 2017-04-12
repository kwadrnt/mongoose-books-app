var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");


// models/index.js
module.exports.Book = require("./book.js");


// // models/index.js
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/book-app");   
// // the mongoose.connect line above  needs to happen exactly once in your code
//     // move it from book.js to index.js  :)

// module.exports.Gargoyle = require("./gargoyle.js");
// module.exports.Goblin = require("./goblin.js");
// module.exports.Gnome = require("./gnome.js");