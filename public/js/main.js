import Terminal from "../js/Terminal.js";


let term
function setup() {
    const canvas = new Canvas('#mainCanvas', 600, 600)


    term = new Terminal(ctx)

}

window.onload = setup
window.addEventListener('keydown', (ev) => {
    term.update(ev)
})

