import Terminal from "../js/Terminal.js";

const yellow = {r: 255, g: 176, b: 0, a: 255}
let mainCanvas = document.querySelector('#mainCanvas')
let ctx = mainCanvas.getContext('2d')
mainCanvas.width = 600
mainCanvas.height = 600


let terminal = new Terminal(ctx)


//Process keyboard input
window.addEventListener('keydown', (ev) => {
    terminal.kBuffer.update(ev)
})

