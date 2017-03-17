var Doctor = require('./../js/doctor.js');
var displayResults = function(doctors) {
  console.log(doctors.data[0].profile.bio);
    $('.results').append(doctors.data[0].profile.bio);
};
$(document).ready(function() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var medicalIssue = $('input[name="name"]').val()
        Doctor.getDoctors(medicalIssue, displayResults) ;
    });

});
