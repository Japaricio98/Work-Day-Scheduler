//Get current day after the page has loaded
window.addEventListener("DOMContentLoaded", (event) => {
    var todaysDate = moment().format("dddd, MMMM Do").toString();
    document.querySelector("#currentDay").innerHTML = todaysDate;
});

// Get current hour the user loaded the page
var currentTime = moment().hour();
//console.log(currentTime);

// Change the color of time blocks
$(".time-block").each(function () {
    var scheduleTime = $(this).attr("id");
    //console.log(scheduleTime);

    if (scheduleTime < currentTime) {
        $(this).children("textarea").addClass("past");
    } else if (scheduleTime == currentTime) {
        $(this).children("textarea").addClass("present");
    } else {
        $(this).children("textarea").addClass("future");
    }
});

