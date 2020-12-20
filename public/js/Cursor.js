class Cursor {
    ctx
    cursor
    color
    width
    height

    constructor(ctx, width, height, color) {
        this.ctx = ctx;
        this.width = width
        this.height = height
        this.cursor = this.ctx.createImageData(this.width, this.height)
        this.color = color
        this.setColor()
    }

    setColor() {
        for (let i = 0; i < this.cursor.data.length; i += 4) {
            this.cursor.data[i] = this.color.r
            this.cursor.data[i + 1] = this.color.g
            this.cursor.data[i + 2] = this.color.b
            this.cursor.data[i + 3] = this.color.a
        }
    }




    animate(x, y) {
        setInterval(() => {
            this.ctx.putImageData(this.cursor, x, y)
            setTimeout(() => {
                this.ctx.clearRect(x, y, this.width, this.height)
            }, 500)
        }, 1000)
    }
}


export default Cursor


