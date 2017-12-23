"use strict";

setInterval(showClock, 1000);

function showClock() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var elem = React.createElement(
        "div",
        null,
        hour,
        ":",
        min,
        ":",
        sec
    );
    var root = document.getElementById("app");
    ReactDOM.render(elem, root);
}