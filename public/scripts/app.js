console.log("Sanity Check: JS is working!");
var template;
var $animalList;

$(document).ready(function(){

  $animalList = $('#animalTarget');

  $.ajax({
    method: 'GET',
    url: '/api/animals',
    success: handleSuccess,
    // error: handleError
  });
};

function handleSuccess(json) {
  allAnimals = json;
  render();
}
