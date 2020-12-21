import getRandomInt from "../js/Random.js";


const yellow = {r: 200, g: 255, b: 0, a: 255}
const img = new Image()
const svgImg = new Image()
img.src = 'images/jpeg/me.jpeg'
svgImg.src = 'images/svg/me.svg'
let mainCanvas
let hiddenCanvas
let ctx
let hCtx



function cursor(x,y){

}

function setup(width, height) {
    mainCanvas = document.querySelector('#mainCanvas')
    hiddenCanvas = document.querySelector('#hiddenCanvas')
    ctx = mainCanvas.getContext('2d')
    hCtx = hiddenCanvas.getContext('2d')
    mainCanvas.width = width
    mainCanvas.height = height
    hiddenCanvas.width = width
    hiddenCanvas.height = height
    hCtx.drawImage(img, 0, 0)
}




img.onload = () => {
    setup(img.width, img.height)
}

window.onload = () => {
    ctx.fillStyle = 'yellow'
    ctx.font = '15px courier'
    ctx.fillText('jake@homepage:~$', 10, 15)
}


window.onkeypress = (ev) => {
    ctx.clearRect(0, 0, img.width, img.height)
    drawRow()
}


function setColor(imageData, rgb) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = rgb.r
        imageData.data[i + 1] = rgb.g
        imageData.data[i + 2] = rgb.b
        imageData.data[i + 3] = 255
    }
    return imageData
}


function drawRow() {
    let x = 0
    setInterval(() => {
        if (x < img.width) {
            let cursor = setColor(ctx.createImageData(5, 533), yellow)
            let imageData = hCtx.getImageData(x, 0, 10, 533)
            ctx.putImageData(cursor, x + 10, 0)
            ctx.putImageData(randomAlpha(imageData), x, 0)
            ctx.drawImage(svgImg, 0, 0)
            x++
        }
    }, 0)
}


function randomAlpha(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 3] = getRandomInt(0, 255)
    }
    return imageData
}
