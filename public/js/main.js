class MyCanvas {
    _canvas
    _context
    constructor(canvasID, width, height) {
        this._canvas = document.querySelector(canvasID)
        this._canvas.width = width
        this._canvas.height = height
        if (this._canvas.getContext) {
            this._context = this._canvas.getContext('2d')
        }
    }
    get canvas() {
        return this._canvas;
    }
    get context() {
        return this._context;
    }
}


/**
 * NoiseGenerator -
 */
class NoiseGenerator {
    imageData
    constructor(imageData) {
        this.imageData = imageData
    }

    tinted(rgba) {
        for (let i = 0; i < this.imageData.data.length; i += 4) {
            this.imageData.data[i] = rgba.r
            this.imageData.data[i + 1] = rgba.g
            this.imageData.data[i + 2] = rgba.b
            this.imageData.data[i + 3] = getRandomInt(0,255)
        }
        return this.imageData
    }

    random(){
        for (let i = 0; i < this.imageData.data.length; i += 4) {
            this.imageData.data[i] = getRandomInt(0, 255)
            this.imageData.data[i + 1] = getRandomInt(0, 255)
            this.imageData.data[i + 2] = getRandomInt(0, 255)
            this.imageData.data[i + 3] = getRandomInt(0, 255)
        }
        return this.imageData
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





let myCanvas = new MyCanvas('#homeCanvas', 400, 600)
let noise = new NoiseGenerator(myCanvas.context.getImageData(0, 0, 60, 60))
let img = new Image()
img.src = 'images/svg/Pelrah_Jake.svg'




myCanvas.canvas.addEventListener('mousemove', (event) => {
    let rect = myCanvas.canvas.getBoundingClientRect()
    let x = event.clientX - rect.x
    let y = event.clientY - rect.y
    myCanvas.context.putImageData(noise.tinted({r:245, g:255, b:250}), x-30,y-30)
    myCanvas.context.drawImage(img, 0, 0, 400, 600)


})

