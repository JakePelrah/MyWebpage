import KeyBuffer from "../js/KeyBuffer.js"
import Cursor from "../js/Cursor.js";
import Color from "../js/Color.js"
import keyBuffer from "../js/KeyBuffer.js";

/**
 * Terminal -simulated terminal
 */
class Terminal {
    ctx
    cursor
    kBuffer
    prompt

    constructor(ctx) {
        this.ctx = ctx;
        this.cursor = new Cursor(Color.yellow,
            10, 20, this.ctx)
        this.kBuffer = new KeyBuffer()
        this.prompt = 'guest@jakePelrah:~$'
        this.setDisplay('#ffb000', '20px ubuntu mono')
        this.drawPrompt(0, 20)
    }



    setDisplay(color, font) {
        this.ctx.fillStyle = color
        this.ctx.font = font
    }

    drawPrompt(x, y) {
        this.ctx.fillText(this.prompt, x, y)
    }

    update(ev){
        console.log(ev)
        this.kBuffer.update(ev)
    }

    calcCursorLocation() {
        let promptLength = this.ctx.measureText(this.prompt)
        this.cursor.drawCursor([0,210])

    }

    get kBuffer() {
        return this.kBuffer;
    }
}


export default Terminal

