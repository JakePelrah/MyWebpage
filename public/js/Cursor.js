class Cursor {
    ctx
    width
    height
    color
    cursor

    constructor(color, width, height, ctx) {
        this.color = color;
        this.width = width
        this.height = height
        this.ctx = ctx
        this.cursor = this.ctx.createImageData(this.width, this.height)
        this.setColor(this.color)
    }

    setColor(color) {
        for (let i = 0; i < this.cursor.data.length; i += 4) {
            this.cursor.data[i] = color.r
            this.cursor.data[i + 1] = color.g
            this.cursor.data[i + 2] = color.b
            this.cursor.data[i + 3] = color.a
        }
    }

    drawCursor(x,y) {
        this.ctx.putImageData(this.cursor, x, y)
    }

    clearCursor(x,y) {
        this.ctx.clearRect(x, y, this.width, this.height)
    }
}


export default Cursor