
import Cursor from "../js/Cursor.js";

const yellow = {r: 51, g: 255, b: 200, a: 255}
let mainCanvas = document.querySelector('#mainCanvas')
let ctx = mainCanvas.getContext('2d')
mainCanvas.width = 600
mainCanvas.height = 600


ctx.font = '20px ubuntu mono'
ctx.fillStyle = 'rgba(51,255,200,255)'
ctx.fillText('guest@jakePelrah:~$', 10, 20)


const keyboardBuffer = []

window.onkeydown = (ev) => {
    switch (ev.key) {
        case 'Backspace':
            keyboardBuffer.pop()
            let textWidth = ctx.measureText(keyboardBuffer.join('')).width
            let x = 210 + textWidth
            let y = 5
            ctx.clearRect(x, y, 10, 20)
            break
        case 'Enter':
            console.log('enter')
            if(keyboardBuffer.join('') === 'resume'){
                console.log('display resume')
            }
            else if('music'){
                console.log('display my image with music links')
            }
            else if(''){

            }
            break
        case 'Tab':
            break
        default:
            if (ev.key.length === 1 &&
                ev.key.match(/\w|[-\s!@#$%^&*()]/)) {
                keyboardBuffer.push(ev.key)
                ctx.fillText(`${keyboardBuffer.join('')}`, 210, 20)
            }
    }

}


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


