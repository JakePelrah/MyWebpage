import Terminal from "../js/Terminal.js";

let term
function setup() {
    const mainCanvas = document.querySelector('#mainCanvas')
    mainCanvas.width = 600
    mainCanvas.height = 600
    const ctx = mainCanvas.getContext('2d')
    ctx.fillStyle = '#ffb000'
    ctx.font = '20px ubuntu mono'
    term = new Terminal(ctx)
}

window.onload = setup
window.addEventListener('keydown', (ev) => {
    term.update(ev)
})

