$(document).ready(function() {
    $('#test-form').bootstrapValidator({
            //submitButtons: '#postForm',
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_Name: {
                    message: 'The first name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'The first name must be more than 1 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[A-z]+$/,
                            message: 'The first name can only accept alphabetical input'
                        },
                    }
                },
                last_Name: {
                    message: 'Last Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Last Name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'Last Name must be more than 1 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[A-z]+$/,
                            message: 'Last Names can only consist of alphabetical characters'
                        },
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The email address is not a valid'
                        }
                    }
                },
                phone_Number: {
                    message: 'phone number is not valid',
                    validators: {
                        notEmpty: {
                            message: 'phone number is required and cannot be empty'
                        }
                    }
                },
                reciept_number: {
                    message: 'reciept number is not valid',
                    validators: {
                        notEmpty: {
                            message: 'reciept number is required and cannot be empty'
                        }
                    }
                },
            }
        })
        .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            var url = 'https://script.google.com/macros/s/AKfycbx0HixIFyl5RJX5q_BVW_04wtdGvoP4E2R6sJ0ZflHE2l2AjQ8/exec';
            var redirectUrl = 'success-page.html';
            // show the loading 
            $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
            var jqxhr = $.post(url, $form.serialize(), function(data) {
                    console.log("Success! Data: " + data.statusText);
                    $(location).attr('href', redirectUrl);
                })
                .fail(function(data) {
                    console.warn("Error! Data: " + data.statusText);
                    // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                        //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                        $(location).attr('href', redirectUrl);
                    }
                });
        });
});