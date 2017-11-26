$(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
$('header').css('background', 'rgba(256,256,256, 0.9)');
} else {
$('header').css('background', 'transparent');
$('.nav-toggle').removeClass('open');
$('.menu-left').removeClass('collapse');
}
});





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
  $('header').css('background', 'rgba(256,256,256, 0.9)');
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
  $('.click-popup-call-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});

$(document).ready(function(){
  $('.close-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});

$(document).ready(function(){
  $('.click-popup-call-skills').on('click', function(){
    $('.popup-call-skills').toggleClass('popup-call-skills-show');
  });
});

$(document).ready(function(){
  $('.close-skills').on('click', function(){
    $('.popup-call-skills').toggleClass('popup-call-skills-show');
  });
});

$(document).ready(function(){
  $('.meddelande').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});

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