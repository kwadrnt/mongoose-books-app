var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Animal = require('./animal');

var AnimalSchema = new Schema({
  name: String,
  endangeredYear: Number,
  locations: [String],
  image: String
});

var Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
