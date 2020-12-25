import KeyBuffer from "../js/KeyBuffer.js"
import Cursor from "../js/Cursor.js";
import Position from "./Position.js"


/**
 * Terminal -simulated canvas terminal
 */
class Terminal {
    ctx
    cursor = new Cursor(Color.yellow, 10, 20).cursor
    kBuffer = new KeyBuffer()
    prompt = 'guest@jakePelrah:~$'
    promptPos = new Position(0, 20)
    textPos = new Position(10, 20)
    cursorPos = new Position(200, 5)
    promptWidth = 0

    constructor(ctx) {
        this.ctx = ctx;
        this.drawPrompt()
        this.drawCursor()
    }

    drawCursor() {
        this.ctx.putImageData(this.cursor, this.cursorPos.x, this.cursorPos.y)
    }

    drawPrompt() {
        this.ctx.fillText(this.prompt, this.promptPos.x, this.promptPos.y)
    }

    getTextWidth(string) {
        return this.ctx.measureText(string).width
    }

    backspace() {
        //Remove last symbol in the buffer
        this.kBuffer.pop()
        //get updated string width
        let textWidth = this.getTextWidth(this.kBuffer.toString())
        //Clear the popped symbol from the screen
        this.ctx.clearRect(this.promptWidth + textWidth + 10, this.textPos.y - 15, 20, 20)
        //Redraw the cursor to reflect removing the character
        this.ctx.putImageData(this.cursor, this.promptWidth + textWidth + 10, this.cursorPos.y)
    }


    enter() {
        //process command here

        let textWidth = this.getTextWidth(this.kBuffer.toString())
        //Clear the prev lines cursor
        this.ctx.clearRect(this.promptWidth + textWidth + 10, this.cursorPos.y, 10, 20)
        //Update positions
        this.promptPos.addY(20)
        this.textPos.addY(20)
        this.cursorPos.addY(20)
        //Redraw the prompt
        this.ctx.fillText(this.prompt, this.promptPos.x, this.promptPos.y)
        //Redraw the cursor
        this.ctx.putImageData(this.cursor, this.promptWidth + 10, this.cursorPos.y)
        //Clear the buffer
        this.kBuffer.clear()
    }

    processKey(ev) {
        this.kBuffer.push(ev)
        let textWidth = this.getTextWidth(this.kBuffer.toString())
        //Draw the cursor to reflect end of current line
        this.ctx.putImageData(this.cursor, this.promptWidth + textWidth + 10, this.cursorPos.y)
        //Clear the prev location of the cursor
        this.ctx.clearRect(this.promptWidth + textWidth, this.cursorPos.y, 10, 20)
        //Draw input string to screen
        this.ctx.fillText(this.kBuffer.toString(), this.promptWidth + 10, this.textPos.y)
    }

    update(ev) {
        this.promptWidth = this.getTextWidth(this.prompt)
        if (ev.key === 'Backspace') {
            this.backspace()
        } else if (ev.key === 'Enter') {
            this.enter()
        } else {
            this.processKey(ev)
        }
        console.log(this.kBuffer.toString())
    }
}


export default Terminal

