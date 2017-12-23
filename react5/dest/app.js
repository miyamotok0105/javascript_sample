"use strict";

var domText = React.createElement(
    "div",
    null,
    React.createElement(Greeting, { type: "hi 1!" }),
    React.createElement(Greeting, { type: "hi 2!" }),
    React.createElement(Greeting, { type: "hi 3!" })
);

var domPhoto = React.createElement(
    "div",
    null,
    React.createElement(PhotoText, { image: "user", label: "1" }),
    React.createElement(PhotoText, { image: "user", label: "2" }),
    React.createElement(PhotoText, { image: "user", label: "3" })
);

function Greeting(props) {
    return React.createElement(
        "h1",
        null,
        props.type
    );
}

function PhotoText(props) {
    var url = "img/" + props.image + ".png";
    var label = props.label;
    var boxStyle = {
        border: "1px solid silver",
        margin: "8px",
        padding: "4px"
    };
    return React.createElement(
        "div",
        { style: boxStyle },
        React.createElement("img", { src: url, width: "120" }),
        React.createElement(
            "span",
            null,
            " ",
            label,
            " "
        )
    );
}

ReactDOM.render(domPhoto, document.getElementById('app'));