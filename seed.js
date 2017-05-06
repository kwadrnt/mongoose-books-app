console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var animalList = [];
  animalList.push({
    name: 'Mexican Wolf',
    endangeredYear: 1976,
    locations: ['Arizona', 'New Mexico', 'Texas'],
    image: 'https://en.wikipedia.org/wiki/Mexican_wolf#/media/File:Mexican_Wolf_2_yfb-edit_1.jpg'
  });
  animalList.push({
    name: 'Red Wolf',
    endangeredYear: 1996,
    locations: ['Florida', 'Mississippi'],
    image: 'https://en.wikipedia.org/wiki/Red_wolf#/media/File:07-03-23RedWolfAlbanyGAChehaw.jpg'
  });


// remove animals first
db.Animal.remove({}, function(err, animals) {
  console.log('removed all Animal');
  db.Animal.create(animalList, function(err, animals){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all animals');
    console.log("created", animals.length, "animals");
    process.exit();
  })
});
