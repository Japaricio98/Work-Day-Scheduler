window.addEventListener("DOMContentLoaded", (event) => {
    var todaysDate = moment().format("dddd, MMMM Do").toString();
    document.querySelector("#currentDay").innerHTML = todaysDate;
});