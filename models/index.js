var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/endangered-animals");

// Use native JavaScript promises to avoid warning
mongoose.Promise = global.Promise;

module.exports.Animal = require("./animal.js");
