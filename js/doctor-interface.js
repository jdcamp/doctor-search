var Doctor = require('./../js/doctor.js');

$(document).ready(function() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var medicalIssue = $('input[name="name"]').val()
        Doctor.getDoctors(medicalIssue);
    });

});
