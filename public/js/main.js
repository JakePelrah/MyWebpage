
import Terminal from "../js/Terminal.js";


const yellow = {r:252, g:127, b:0, a:255}
let term

function setup() {
    term = new Terminal('#mainCanvas', 'UbuntuMono', yellow)
}


window.onload = setup
window.onkeydown = (ev) => {
    term.update(ev)
}
window.onresize = () => {
    term.resize()
}
