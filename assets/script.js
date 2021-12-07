console.log("welcome");

// Varibles

var today = $("#currentDay")
var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
$('#currentDay').text(now);
var plans;
var storedPlans = localStorage.getItem("plans");

// Turning on saved button response

$(".saveBtn").on('click', savePlans);

//  Checking if anyting was entered into times, if not, nothing gets saved. Anyting else will be saved

function initialPage() {
    if (!storedPlans) {
        plans = {};
    } else {
        plans = JSON.parse(storedPlans);
        console.log(plans);
    }
}

//  Storing plans into the storage

function savePlans(event) {
    var content = $(event.target);
    var test = content.attr("id");
    var savedPlan = content.parent().siblings("textarea").val();
    plans[test] = savedPlan;
    localStorage.setItem("plans", JSON.stringify(savedPlan));
    console.log(savedPlan);
}



// Live clock telling date & time

setInterval(function () {
    var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
    $('#currentDay').text(now);
}, 1000);

// Gives color to time slots dependind on the current hours status

function color() {
    $("textarea").each(function () {
        var time = $(this).data("time")
        var hour = moment().hour()
        console.log(time, hour)
        if (time === hour) {
            $(this).addClass("present")
        }
        else if (time > hour) {
            $(this).addClass("future")
        }
        else {
            $("past")
        }
    })
}



// Generates functions 

color();
initialPage();
            







