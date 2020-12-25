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
        this.cursor = new Cursor(Color.yellow, 10, 20).cursor
        this.kBuffer = new KeyBuffer()
        this.prompt = 'guest@jakePelrah:~$'
        this.setDisplay('#ffb000', '20px ubuntu mono')
        this.promptPos = new Coord(0, 20)
        this.textPos = new Coord(10, 20)
        this.cursorPos = new Coord(200, 5)
        //Draw
        this.ctx.putImageData(this.cursor,this.cursorPos.x, this.cursorPos.y)
        this.ctx.fillText(this.prompt, this.promptPos.x ,this.promptPos.y)

    }


    setDisplay(color, font) {
        this.ctx.fillStyle = color
        this.ctx.font = font
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
            this.ctx.putImageData(this.cursor, promptWidth + textWidth + 10, this.cursorPos.y)
        }

        else if(ev.key === 'Enter'){
            let textWidth = this.getTextWidth(this.kBuffer.toString())
            this.promptPos.addY(20)
            this.textPos.addY(20)
            this.ctx.clearRect(promptWidth + textWidth + 10, this.cursorPos.y, 10,20)
            this.cursorPos.addY(20)
            this.ctx.fillText(this.prompt, this.promptPos.x ,this.promptPos.y)
            this.ctx.putImageData(this.cursor,promptWidth +  10, this.cursorPos.y)
            this.kBuffer.clear()
        }
        else {
            this.kBuffer.push(ev)
            let textWidth = this.getTextWidth(this.kBuffer.toString())
            this.ctx.putImageData(this.cursor, promptWidth + textWidth + 10, this.cursorPos.y)
            this.ctx.clearRect(promptWidth + textWidth , this.cursorPos.y, 10, 20)
            this.ctx.fillText(this.kBuffer.toString(), promptWidth + 10 ,  this.textPos.y)
        }
    console.log(this.kBuffer.toString())
    }


    get kBuffer() {
        return this.kBuffer;
    }
}


export default Terminal

