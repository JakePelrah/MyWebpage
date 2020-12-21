import getRandomInt from "../js/Random.js";


const terminalGreen = {r: 51, g: 255, b: 0, a: 255}
const img = new Image()
const svgImg = new Image()
img.src = 'images/jpeg/me.jpeg'
svgImg.src = 'images/svg/me.svg'
let mainCanvas
let hiddenCanvas
let ctx
let hCtx


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



function animate() {
    setInterval(() => {
        ctx.putImageData(setColor(ctx.createImageData(10, 20)), 260, 0)
        setTimeout(() => {
            ctx.clearRect(260, 0, 10, 20)
        }, 500)
    }, 1000)
}

window.onload =()=>{
    ctx.fillStyle = '#33ff00'
    ctx.font = '15px courier'
    animate(0,20)
    ctx.fillText('Press any key to continue...', 10, 15)
}


window.onkeypress =(ev)=>{
    ctx.clearRect(0,0, img.width,img.height)
        let row = 0
        setInterval(()=>{
            drawRow(row)
            row+=40
        }, 2000)
}

img.onload = () => {
    setup(img.width, img.height)
}

function randomAlpha(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i + 3] = getRandomInt(0, 255)
    }
    return imageData
}
function setColor(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = 51
        imageData.data[i + 1] = 255
        imageData.data[i + 2] = 0
        imageData.data[i+3] = 255
    }
    return imageData
}



function drawRow(row){
    let x=0
    setInterval(() => {
        if (x < img.width) {
            let cursor = setColor(ctx.createImageData(10, 40))

            let imageData = hCtx.getImageData(x, row, 10, 40)
            ctx.putImageData(cursor,x+10,row)
            ctx.putImageData(randomAlpha(imageData), x, row)
            ctx.drawImage(svgImg, 0 ,0)
            x++
        }
    }, 0)
}