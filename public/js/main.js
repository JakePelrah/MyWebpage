import Terminal from "../js/Terminal.js";

let mainCanvas
let ctx
let terminal

function setup() {
    mainCanvas = document.querySelector('#mainCanvas')
    mainCanvas.width = 600
    mainCanvas.height = 600
    ctx = mainCanvas.getContext('2d')
    terminal = new Terminal(ctx)
    terminal.drawPrompt(0,20)
}

window.onload = setup


//Process keyboard input
window.addEventListener('keydown', (ev) => {
    terminal.update(ev)
})

