"use strict";

function Greeting(props) {
    return React.createElement(
        "h1",
        null,
        props.type
    );
}

var dom = React.createElement(
    "div",
    null,
    React.createElement(Greeting, { type: "hi 1!" }),
    React.createElement(Greeting, { type: "hi 2!" }),
    React.createElement(Greeting, { type: "hi 3!" })
);

ReactDOM.render(dom, document.getElementById('app'));