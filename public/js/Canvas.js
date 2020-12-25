class Canvas {
    width
    height
    ctx
    constructor(id, width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.querySelector(id)
        this.canvas.width = this.width
        this.canvas.height = this.height

        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d')
            this.ctx.fillStyle = '#ffb000'
            this.ctx.font = '20px ubuntu mono'
        }
    }

}