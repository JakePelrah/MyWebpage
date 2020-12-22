import Terminal from '../js/Terminal.js'

const yellow = {r:51, g:255, b:200,a:255}


let mainCanvas
let ctx
mainCanvas = document.querySelector('#mainCanvas')
mainCanvas.width = 600
mainCanvas.height = 600
ctx = mainCanvas.getContext('2d')

let terminal = new Terminal(yellow, ctx)














//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// window.onload = () => {
// }
//
// window.onkeypress = (ev) => {
//
// }
//
// window.onkeydown = (ev) => {
//
// }
//
//
//
// //
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


