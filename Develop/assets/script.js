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

// Get textarea values from local stoarge if present
for (var i=9; i<18; i++) {
    var hourTextVal = localStorage.getItem(i);
    var hourTextID = "text-" + i;

    if (hourTextVal !== null) {
        document.getElementById(hourTextID).value = hourTextVal;
    }

    //console.log(document.getElementById(hourTextID));
};

// Save textarea value to local stoarge
$(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key, value);
    console.log(key, value);
  });
