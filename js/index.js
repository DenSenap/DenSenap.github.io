

$(document).ready(function(){
  $('.click-popup-image').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $('.blur-not').toggleClass('blur-filter');
  });
});

$(document).ready(function(){
  $('.close-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $(".blur-not").toggleClass("blur-filter");
  });
  
});


$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});


$(window).scroll(function () {
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
  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });


function updateTimer() {
  future  = Date.parse("May 4, 2018 20:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>Dagar</span></div>' +
      '<div>' + h + '<span>Timmar</span></div>' +
      '<div>' + m + '<span>Minuter</span></div>' +
      '<div>' + s + '<span>Sekunder</span></div>' ;
}
setInterval('updateTimer()', 1000 );




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

  if($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top -85
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

// SHOW/HIDE NAV

// Hide Header on on scroll down
//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = $('header').outerHeight();

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


$(document).ready(function(){
  $('.click-popup-call-read').on('click', function(){
    $('.popup-call-read').toggleClass('popup-call-read-show');
  });
});

$(document).ready(function(){
  $('.close-read').on('click', function(){
    $('.popup-call-read').toggleClass('popup-call-read-show');
  });
});



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