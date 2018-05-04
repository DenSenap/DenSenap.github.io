function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();



$(function() {
    $("#tabs").tabs();
});
//Jobbar fortfarande
$(document).ready(function() {
    $('.click-popup-image').on('click', function() {
        $('.popup-call-contact').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-contact').on('click', function() {
        $('.popup-call-contact').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});
//Information för föräldrar
$(document).ready(function() {
    $('.click-popup-information').on('click', function() {
        $('.popup-call-information').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-information').on('click', function() {
        $('.popup-call-information').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});
//Sponsor Popup
$(document).ready(function() {
    $('.click-popup-sponsor').on('click', function() {
        $('.popup-call-sponsor').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-sponsor').on('click', function() {
        $('.popup-call-sponsor').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});
//Jakob ungdom 1
$(document).ready(function() {
    $('.click-popup-jakob').on('click', function() {
        $('.popup-call-jakob').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-jakob').on('click', function() {
        $('.popup-call-jakob').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Emil ungdom 2
$(document).ready(function() {
    $('.click-popup-emil').on('click', function() {
        $('.popup-call-emil').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-emil').on('click', function() {
        $('.popup-call-emil').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Yoel ungdom 3
$(document).ready(function() {
    $('.click-popup-yoel').on('click', function() {
        $('.popup-call-yoel').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-yoel').on('click', function() {
        $('.popup-call-yoel').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Jonatan ungdom 4
$(document).ready(function() {
    $('.click-popup-jonatan').on('click', function() {
        $('.popup-call-jonatan').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-jonatan').on('click', function() {
        $('.popup-call-jonatan').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Lovisa ungdom 5
$(document).ready(function() {
    $('.click-popup-lovisa').on('click', function() {
        $('.popup-call-lovisa').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-lovisa').on('click', function() {
        $('.popup-call-lovisa').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Adam ungdom 6
$(document).ready(function() {
    $('.click-popup-adam').on('click', function() {
        $('.popup-call-adam').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-adam').on('click', function() {
        $('.popup-call-adam').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Aaron ungdom 7
$(document).ready(function() {
    $('.click-popup-aaron').on('click', function() {
        $('.popup-call-aaron').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-aaron').on('click', function() {
        $('.popup-call-aaron').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Meron ungdom 8
$(document).ready(function() {
    $('.click-popup-meron').on('click', function() {
        $('.popup-call-meron').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-meron').on('click', function() {
        $('.popup-call-meron').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Kevin ungdom 9
$(document).ready(function() {
    $('.click-popup-kevin').on('click', function() {
        $('.popup-call-kevin').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-kevin').on('click', function() {
        $('.popup-call-kevin').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Natnael ungdom 10
$(document).ready(function() {
    $('.click-popup-natnael').on('click', function() {
        $('.popup-call-natnael').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-natnael').on('click', function() {
        $('.popup-call-natnael').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});

//Milkias ungdom 11
$(document).ready(function() {
    $('.click-popup-milkias').on('click', function() {
        $('.popup-call-milkias').toggleClass('popup-call-show');
        $('.blur-not').toggleClass('blur-filter');
    });
});

$(document).ready(function() {
    $('.close-milkias').on('click', function() {
        $('.popup-call-milkias').toggleClass('popup-call-show');
        $(".blur-not").toggleClass("blur-filter");
    });

});


$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#top').fadeIn("fast"); // Fade in the arrow
    } else {
        $('#top').fadeOut("fast"); // Else fade out the arrow
    }
});


$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('header').css('background', '#404040');
    } else {
        $('header').css('background', 'transparent');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('header').css('padding-top', '2vh');
        $('header').css('padding-bottom', '2vh');


    } else {
        $('header').css('padding-top', '5vh');
        $('header').css('padding-bottom', '5vh');


    }
});



var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//click the image and a scaled version of the full size image will appear
$("#photo-gallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
});

$("#overlay").click(function() {
    $("#overlay").hide();
});


function updateTimer() {
    future = Date.parse("May 4, 2018 20:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>Dagar</span></div>' +
        '<div>' + h + '<span>Timmar</span></div>' +
        '<div>' + m + '<span>Minuter</span></div>' +
        '<div>' + s + '<span>Sekunder</span></div>';
}
setInterval('updateTimer()', 1000);

function updateTimer2() {
    future = Date.parse("May 4, 2018 20:00:00");
    now = new Date();
    diff = future - future;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer2")
        .innerHTML =
        '<div>' + d + '<span>Dagar</span></div>' +
        '<div>' + h + '<span>Timmar</span></div>' +
        '<div>' + m + '<span>Minuter</span></div>' +
        '<div>' + s + '<span>Sekunder</span></div>';
}
setInterval('updateTimer2()', 1000);



// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeInOutQuad')
});
$('.start').on('click', function(e) {
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

    if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $target.offset().top - 85
        }, 750, 'easeInOutQuad');
    }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
    $('header').css('background', '#404040');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');

});

$(document).ready(function() {
    $('.click-popup-call-read').on('click', function() {
        $('.popup-call-read').toggleClass('popup-call-read-show');
    });
});

$(document).ready(function() {
    $('.close-read').on('click', function() {
        $('.popup-call-read').toggleClass('popup-call-read-show');
    });
});
