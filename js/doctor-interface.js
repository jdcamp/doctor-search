var Doctor = require('./../js/doctor.js');
var displayResults = function(doctors) {
  $('.results').text('');
  for (var i = 0; i < doctors.data.length; i++) {

    $('.results').append('<img src="'+ doctors.data[i].profile.image_url+' alt="No image" class="profile-picture-format"/>');

  }
  console.log(doctors.data[0].profile.bio);
};
$(document).ready(function() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var medicalIssue = $('input[name="name"]').val()
        Doctor.getDoctors(medicalIssue, displayResults) ;
    });

});
