import NoiseGenerator from '../js/NoiseGenerator.js'
import Canvas from '../js/Canvas.js'

let img = new Image()
img.src = 'images/svg/Pelrah_Jake.svg'
let me = new Image()
me.src = 'images/jpeg/me.jpeg'

let width = img.width/2
let height = img.height/2



let homeCanvas = new Canvas('#homeCanvas', width, height)
let hiddenCanvas = new Canvas('#hiddenCanvas', width, height)

homeCanvas.canvas.addEventListener('mousemove', (event) => {
    hiddenCanvas.ctx.drawImage(me, 0, 0, width, height)
    let noise = new NoiseGenerator(hiddenCanvas.ctx.getImageData(0,0,width,height))
    homeCanvas.ctx.putImageData(noise.randomAlpha(), 0,0)
    homeCanvas.ctx.drawImage(img, 0, 0, width, height)
})




