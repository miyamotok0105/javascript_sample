'use strict';

var root = document.querySelector('#disp');
var msg = getGreeting();
ReactDOM.render(msg, root);
function getGreeting() {
    var r = Math.floor(Math.random() * 3);
    if (r == 0) return React.createElement(
        'p',
        null,
        'hi!0!'
    );
    if (r == 1) return React.createElement(
        'p',
        null,
        'hi!1!'
    );
    if (r == 2) return React.createElement(
        'p',
        null,
        'hi!2!'
    );
}