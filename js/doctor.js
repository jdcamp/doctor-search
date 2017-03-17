apiKey = require('./../.env').apiKey;


exports.getDoctors = function(medicalIssue, callback) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     callback(result);
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};
exports.getDoctorsByName = function(name, callback) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name='+ name+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     callback(result);

    })
   .fail(function(error){
      console.log("fail");
    });
};
