class Canvas {
    _ctx
    constructor(id, width, height, font, color) {
        this._canvas = document.querySelector(id)
        this._canvas.width = width
        this._canvas.height = height
        if (this._canvas.getContext) {
            this._ctx = this._canvas.getContext('2d')
            this.ctx.font = font
            this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        }
    }

    get ctx() {
        return this._ctx;
    }
}

export default Canvas