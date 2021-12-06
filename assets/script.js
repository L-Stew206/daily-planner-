console.log ("welcome");

// Varibles

var today = $("#currentDay")

// live clock telling date & time
setInterval(function() {
     var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
    $('#currentDay').text(now);
    }, 1000);

