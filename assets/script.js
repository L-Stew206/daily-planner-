console.log("welcome");

// Varibles

var today = $("#currentDay")
var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
$('#currentDay').text(now);

// live clock telling date & time
setInterval(function () {
    var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
    $('#currentDay').text(now);
}, 1000);

function color() {
    $("textarea").each(function () {
        var time = $(this).data("time")
        var hour = moment().hour()
        console.log(time, hour)
        if (time === hour) {
            $(this).addClass("present")
        }
        else if (time < hour) {
            $(this).addClass("future") 
            } 
        else {
            $("past")
        }
    })
                
            



}
color();



