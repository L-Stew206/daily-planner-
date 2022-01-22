// Varibles
var today = $("#currentDay")
var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
$('#currentDay').text(now);
var plans = []

// Turning on saved button response
$(".saveBtn").on('click', savePlans);

//  Checking if anyting was entered into times, if not, nothing gets saved. Anyting else will be saved
function loadPage() {
    // console.log(localstorage)
    // loop over all the elements in localStorage and set the element previous to buttonID (key) to the value
    for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        console.log (key + " " + value)

        // TODO: use the key to find the  element (previous) and set the value 
        // get buttonID
        buttonID = key;
        //derive textareaid from buttonid
        textAreaID = buttonID.substring(0, buttonID.length - 1);
        // clean up the value by chopping off the quote from the front and the back
        unquotedValue = value.substring(1, value.length-1)
        //finally set the value to the script element
        document.getElementById(textAreaID).value = unquotedValue;
    }
}

//  Storing plans into the storage
function savePlans(event) {
    var content = $(event.target);
    console.log(content);
    var buttonID = content.attr("id");
    console.log(buttonID);
    console.log(content.prev().val());
    var saveText = content.prev().val();
    localStorage.setItem(buttonID, JSON.stringify(saveText));
}
    
    // var savedPlan = content.parent().siblings("textarea").val();
    // plans[test] = savedPlan;
    // localStorage.setItem("plans", JSON.stringify(savedPlan));
    // console.log(savedPlan);
   //^^ didnt work, 
    
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
loadPage();





