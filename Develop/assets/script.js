//Get current day after the page has loaded
window.addEventListener("DOMContentLoaded", (event) => {
    var todaysDate = moment().format("dddd, MMMM Do").toString();
    document.querySelector("#currentDay").innerHTML = todaysDate;
});

var currentTime = moment().hour();
console.log(currentTime);