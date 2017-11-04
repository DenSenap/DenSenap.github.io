// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
$('.hem').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
// LINKS TO ANCHORS
$('a[href^="#"]').on('click', function(event) {

  var $target = $(this.getAttribute('href'));

  if($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 750, 'easeInOutQuad');
  }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function() {
  $(this).toggleClass('open');
  $('.menu-left').toggleClass('collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function() {
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}

  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message:'Vänligen fyll i ditt förnamn'
                    },
                        notEmpty: {
                        message: 'Vänligen fyll i ditt förnamn'
                    }
                }
            },
             efternamn: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Vänligen fyll i ditt efternamn'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i ditt efternamn'
                    }
                }
            },
             organisation: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Vänligen fyll i vilken organisation du representerar'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i vilken organisation du representerar'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Vänligen fyll i din e-postadress'
                    },
                    emailAddress: {
                        message: 'Vänligen fyll i en giltig e-postadress'
                    }
                }
            },
             phone: {
                validators: {
                     stringLength: {
                        min: 9,
                        max: 10,
                        message:'Vänligen fyll i ett giltigt telefonnummer'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i ditt telefonnummer'
                    }
                }
            },
            lokaladress: {
                validators: {
                     stringLength: {
                        min: 2,
                        max: 100,
                        message: 'Vänligen fyll i en giltig adress'
                    },
                }
            },
            datum: {
                validators: {
                     stringLength: {
                        min: 8,
                        max: 10,
                        message: 'Vänligen fyll i ett giltigt datum'
                    },
                }
            },
            kurs: {
                validators: {
                    notEmpty: {
                        message: 'Vänligen välj den kurs du är intresserad i'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            kommentar: {
                validators: {
                      stringLength: {
                        min: 1,
                        max: 200,
                        message:'Vänligen skriv inte fler än 200 tecken'
                    },
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});