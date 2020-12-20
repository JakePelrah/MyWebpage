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

export default Canvas