class Canvas {
    _ctx
    constructor(id) {
        this._canvas = document.querySelector(id)
        this._canvas.width = window.innerWidth / 2
        this._canvas.height = window.innerHeight / 2

        if (this._canvas.getContext) {
            this._ctx = this._canvas.getContext('2d')
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