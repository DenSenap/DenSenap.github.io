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

function updateTimer() {
    future = Date.parse("December 15, 2018 20:00:00");
    now = new Date();
    
    if (future < new Date()) {
    diff = future - future;
        } else {
    diff = future - now;
        }    
        

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


