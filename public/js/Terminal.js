import KeyBuffer from "../js/KeyBuffer.js"
import Cursor from "../js/Cursor.js";
import Color from "../js/Color.js"
import Coord from "../js/Coord.js"
import keyBuffer from "../js/KeyBuffer.js";

/**
 * Terminal -simulated terminal
 */
class Terminal {
    ctx
    cursor
    kBuffer
    prompt
    promptPos
    textPos
    cursorPos
    constructor(ctx) {
        this.ctx = ctx;
        this.cursor = new Cursor(Color.yellow,
            10, 20, this.ctx)
        this.kBuffer = new KeyBuffer()
        this.prompt = 'guest@jakePelrah:~$'
        this.setDisplay('#ffb000', '20px ubuntu mono')
        this.promptPos = new Coord(0, 20)
        this.textPos = new Coord(10, 20)
        this.cursorPos = new Coord(200, 5)
        //Draw
        this.cursor.drawCursor(this.cursorPos.x, this.cursorPos.y)
        this.drawText(this.prompt, this.promptPos.x ,this.promptPos.y)

    }


    setDisplay(color, font) {
        this.ctx.fillStyle = color
        this.ctx.font = font
    }

    drawText(text, x, y) {
        this.ctx.fillText(text, x,y)
    }

    getTextWidth(string){
        return this.ctx.measureText(string).width

    }

    update(ev){

        const promptWidth = this.getTextWidth(this.prompt)
        if(ev.key === 'Backspace'){
            this.kBuffer.pop()
            let textWidth = this.getTextWidth(this.kBuffer.toString())
            this.ctx.clearRect( promptWidth + textWidth + 10, this.textPos.y-15, 20, 20)
            this.cursor.drawCursor(promptWidth + textWidth + 10, this.cursorPos.y)
        }

        else if(ev.key === 'Enter'){
            let textWidth = this.getTextWidth(this.kBuffer.toString())
            this.promptPos.addY(20)
            this.textPos.addY(20)
            this.cursor.clearCursor(promptWidth + textWidth + 10, this.cursorPos.y)
            this.cursorPos.addY(20)
            this.drawText(this.prompt, this.promptPos.x ,this.promptPos.y)
            this.cursor.drawCursor(promptWidth +  10, this.cursorPos.y)
            this.kBuffer.clear()
        }
        else {
            this.kBuffer.push(ev)
            let textWidth = this.getTextWidth(this.kBuffer.toString())
            this.cursor.drawCursor(promptWidth + textWidth + 10, this.cursorPos.y)
            this.cursor.clearCursor(promptWidth + textWidth , this.cursorPos.y)
            this.drawText(this.kBuffer.toString(), promptWidth + 10 ,  this.textPos.y)
        }
    console.log(this.kBuffer.toString())
    }


    get kBuffer() {
        return this.kBuffer;
    }
}


export default Terminal

