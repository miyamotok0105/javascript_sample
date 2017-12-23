
setInterval(showClock, 1000)

function showClock() {
    const d = new Date()
    const hour = d.getHours()
    const min = d.getMinutes()
    const sec = d.getSeconds()
    const elem = <div>
        {hour}:{min}:{sec}
    </div>;
    const root = document.getElementById("app")
    ReactDOM.render(elem, root)
}

