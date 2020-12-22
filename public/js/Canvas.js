class Canvas {
    _canvas
    _ctx

    constructor(canvasID, w, h) {
        this._canvas = document.querySelector(canvasID)
        this._canvas.width = w
        this._canvas.height = h
        if (this._canvas.getContext) {
            this._ctx = this._canvas.getContext('2d')
        }
    }


    getColorAtPixel(x, y, width, imageData) {
        let r = imageData.data[((y * (imageData.width * 4)) + (x * 4))];
        let g = imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 1];
        let b = imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 2];
        return {r, g, b}
    }


    getMouseXY(event, canvas) {
        let rect = this._canvas.getBoundingClientRect()
        let x = event.clientX - rect.x
        let y = event.clientY - rect.y
        return {x, y}
    }


    get ctx() {
        return this._ctx;
    }


    get canvas() {
        return this._canvas;
    }
}

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



export default Canvas