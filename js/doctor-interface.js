var Doctor = require('./../js/doctor.js');
var displayResults = function(doctors) {
    $('.results').text('');

    for (var i = 0; i < doctors.data.length; i++) {
      listStr = '<ul class="list-group">'
      for (var j = 0; j < doctors.data[i].specialties.length; j++) {
        var specialty = doctors.data[i].specialties[j].name;
        listStr = listStr + '<li class="list-group-item">'+specialty+'</li>'
      }
      listStr = listStr +'<ul>';
      $('.results').append('<div class="profile-template">' +
            '<div class="container">' +
              '<div class="row">' +
                '<div class="col-sm-2">' +
                  '<div class="row">' +
                    '<img src="' + doctors.data[i].profile.image_url + '" alt="No image" class="profile-picture-format" />' +
                  '</div>' +
                  '<div class="row doctor-name">' +
                    doctors.data[i].profile.first_name + " " + doctors.data[i].profile.last_name + " " + doctors.data[i].profile.title +
                  '</div>' +
                '</div>' +
                '<div class="col-sm-4">' +
                '<div class="row">' +
                  '<h4>'+doctors.data[i].practices[0].name+'</h4>' +
                  '<p>' +
                    doctors.data[i].practices[0].visit_address.street + "<br>" +
                    doctors.data[i].practices[0].visit_address.city + ", " + doctors.data[i].practices[0].visit_address.state + " " + doctors.data[i].practices[0].visit_address.zip +
                  '</p>'+
                '</div>' +
              '</div>' +
              '<div class="row">' +
              '<div class="col-sm-3">' +
              '<h4>Specialties</h4>' +
              listStr +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>');
    }
    $('.results').append('<p id="attribution">powered by <a href="https://betterdoctor.com">https://betterdoctor.com</a></p>');
};


$(document).ready(function() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var search = $('input[name="name"]').val();
        var searchBy = $('input[search-option="name"]').val();
        if (searchBy === 'name') {
          Doctor.getDoctorsbyName(search, displayResults);
        } else {
          Doctor.getDoctors(search, displayResults);
        }
    });

});
