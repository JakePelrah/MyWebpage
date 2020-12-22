class Cursor {
    ctx
    width
    height
    color
    cursor
    intervalId
    position

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

    setPosition(position) {
        this.position = position
    }

    setBlinking(isBlinking){
        if(isBlinking){
            this.blink()
        }
        else {
            clearInterval(this.intervalId)
        }
    }

    drawCursor(){
        this.ctx.putImageData(this.cursor, ...this.position)
    }

    clearCursor() {
        this.ctx.clearRect(...this.position, this.width, this.height)
    }

    blink() {
      this.intervalId =  setInterval(()=>{
            this.drawCursor()
            setTimeout(()=>{
                this.clearCursor()
            }, 500)
        },1000)
    }
}


export default Cursor