import Terminal from "../js/Terminal.js";

let term
function setup() {
    const mainCanvas = document.querySelector('#mainCanvas')
    mainCanvas.width = 600
    mainCanvas.height = 600
    const ctx = mainCanvas.getContext('2d')
    term = new Terminal(ctx)
}

window.onload = setup
window.addEventListener('keydown', (ev) => {
    term.update(ev)
})




// // function drawRow() {
// //     let x = 0
// //     setInterval(() => {
// //         if (x < img.width) {
// //             let cursor = setColor(ctx.createImageData(5, 533), yellow)
// //             let imageData = hCtx.getImageData(x, 0, 10, 533)
// //             ctx.putImageData(cursor, x + 10, 0)
// //             ctx.putImageData(randomAlpha(imageData), x, 0)
// //             ctx.drawImage(svgImg, 0, 0)
// //             x++
// //         }
// //     }, 0)
// // }
//
//
// // function randomAlpha(imageData) {
// //     for (let i = 0; i < imageData.data.length; i += 4) {
// //         imageData.data[i + 3] = getRandomInt(0, 255)
// //     }
// //     return imageData
// // }
//
