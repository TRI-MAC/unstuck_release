let scroll_measurements = [];
let scroll_times = [];
let start = 0;

var checkScrollSpeed = (function(settings){
    settings = settings || {};

    let lastPos, newPos, timer, delta,
        delay = 250; //settings.delay || 10;

    //let start = new Date();

    function clear() {
        lastPos = null;
        delta = 0;
    }

    clear();

    return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll
            delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
    };
})();

document.addEventListener('scroll', function() {
    start = new Date();
    let measurement = checkScrollSpeed();
    // Push info to buffer
    scroll_times.push(start);
    scroll_measurements.push(measurement);
    //console.log(scroll_times);
    //console.log(scroll_measurements;
    //console.log("logging scrolls...")
    // Once buffer is large enough, send as message to background page
    let message = {type: 'log_scrolls', data: {"scroll_time" : start, "scroll_data": measurement}};
    //console.log(message);
    chrome.runtime.sendMessage(message);
    scroll_times = [];
    scroll_measurements = [];
    /*
    if (scroll_measurements.length >= 100){
      //console.log("Scroll buffer 100 long. Record and wipe");
      console.log("======Sending scroll msg=========")
      console.log(scroll_measurements);
      console.log(scroll_times);
      let message = {type: 'log_scrolls', data: {"scroll_times" : scroll_times.toString(), "scroll_measurements": scroll_measurements.toString()}};
      console.log("Message: ")
      console.log(message);
      chrome.runtime.sendMessage(message);
      scroll_dates = [];
      scroll_measurements = [];
    }
    */

});
