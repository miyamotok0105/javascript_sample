
function Greeting (props) {
    return <h1>{props.type}</h1>
}

const dom = <div>
    <Greeting type="hi 1!" />
    <Greeting type="hi 2!" />
    <Greeting type="hi 3!" />
</div>

ReactDOM.render(
  dom,
  document.getElementById('app')
)
