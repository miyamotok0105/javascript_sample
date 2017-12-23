const root = document.querySelector('#disp')
const msg = getGreeting()
ReactDOM.render(msg, root)
function getGreeting () {
    const r = Math.floor(Math.random() * 3)
    if (r == 0) return <p>hi!0!</p>
    if (r == 1) return <p>hi!1!</p>
    if (r == 2) return <p>hi!2!</p>
}
