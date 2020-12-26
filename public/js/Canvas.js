class Canvas {
    _ctx
    font
    color
    constructor(id, font, color) {
        this._canvas = document.querySelector(id)
        this._canvas.width = window.innerWidth / 2
        this._canvas.height = window.innerHeight / 2
        this.font = font
        this.color = color
        if (this._canvas.getContext) {
            this._ctx = this._canvas.getContext('2d')
            this.ctx.font = font
            this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`

        }
    }



    get ctx() {
        return this._ctx;
    }

    resize() {
        this.ctx.font = `${window.innerWidth/4}px UbuntuMono`
        this._canvas.width = window.innerWidth / 2
        this._canvas.height = window.innerHeight / 2

    }
}

export default Canvas