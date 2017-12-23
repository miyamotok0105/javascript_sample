
const domText = <div>
    <Greeting type="hi 1!" />
    <Greeting type="hi 2!" />
    <Greeting type="hi 3!" />
</div>

const domPhoto = <div>
    <PhotoText image="user" label="1" />
    <PhotoText image="user" label="2"  />
    <PhotoText image="user" label="3"  />
</div>

function Greeting (props) {
    return <h1>{props.type}</h1>
}

function PhotoText (props) {
    const url = "img/" + props.image + ".png"
    const label = props.label
    const boxStyle = {
        border: "1px solid silver",
        margin: "8px",
        padding: "4px"
    }
    return  <div style={boxStyle}>
                <img src={url} width="120"/>
                <span> {label} </span>
            </div>
}

ReactDOM.render(
  domPhoto,
  document.getElementById('app')
)
