import Canvas from "../js/Canvas.js";
import KeyBuffer from "../js/KeyBuffer.js";
import Position from "../js/Position.js";

/**
 * Terminal -simulated canvas terminal
 */
class Terminal extends Canvas {

    constructor(id, width, height, font, color, promptStr, regex) {
        super(id, width, height, font, color)
        this.fontSize = parseInt(font.split(' ')[0].match(/[0-9]+/))
        this.promptStr = promptStr
        this.promptLen = this.getStringWidth(this.promptStr)
        this.kBuffer = new KeyBuffer(regex)

        //Initial Positions
        this.promptPos = new Position(0, this.fontSize)
        this.textPos = new Position(this.getStringWidth(this.promptStr) + this.fontSize / 2, this.fontSize)
        this.cursorPos = new Position(this.getStringWidth(this.promptStr) + this.fontSize ,  Math.ceil(this.fontSize/4))

        //Draw calls
        this.drawPrompt(this.promptPos.x, this.promptPos.y)
        this.drawCursor(this.cursorPos.x, this.cursorPos.y)

        //Set listener for key input
        window.onkeydown = (ev) => {
            this.update(ev)
        }
    }


    getStringWidth(string) {
        return this.ctx.measureText(string).width
    }

    drawPrompt(x, y) {
        this.ctx.fillText(this.promptStr, x, y)
    }

    drawLastChar(x, y) {
        this.ctx.fillText(this.kBuffer.lastChar(), x, y)
    }

    clearLastChar(x, y) {
        this.ctx.clearRect(x, y, this.fontSize / 2, this.fontSize)

    }


    drawCursor(x, y) {
        this.ctx.fillRect(x, y, this.fontSize / 2, this.fontSize)
    }

    clearCursor(x, y) {
        this.ctx.clearRect(x, y, this.fontSize / 2, this.fontSize)
    }

    update(ev) {
        switch (ev.key) {
            case 'Enter':
                //clear the old cursors rect
                this.clearCursor(this.cursorPos.x, this.cursorPos.y)
                //process command in buffer

                //clear buffer contents
                this.kBuffer.clear()
                //Move prompt, cursor and text output to next line
                this.promptPos.y += this.fontSize
                this.cursorPos.y += this.fontSize
                this.textPos.y += this.fontSize
                //Move cursor and text output back to a position after the prompt
                this.cursorPos.x = this.getStringWidth(this.promptStr) + this.fontSize
                this.textPos.x = this.getStringWidth(this.promptStr) + this.fontSize / 2
                this.drawPrompt(this.promptPos.x, this.promptPos.y)
                this.drawCursor(this.cursorPos.x, this.cursorPos.y)
                break
            case 'Backspace':
                //Pop buffer
                this.kBuffer.pop()
                let string = this.kBuffer.toString()
                this.cursorPos.x = this.promptLen + this.getStringWidth(string) + this.fontSize
                this.textPos.x = this.promptLen + this.getStringWidth(string) + this.fontSize / 2
                this.clearLastChar(this.cursorPos.x, this.cursorPos.y)
                this.drawCursor(this.cursorPos.x, this.cursorPos.y)
                this.clearCursor(this.cursorPos.x + this.fontSize/2, this.cursorPos.y)
                break
            default:
                if (this.kBuffer.push(ev)) {
                    this.textPos.x += this.fontSize / 2
                    this.cursorPos.x += this.fontSize / 2
                    this.drawCursor(this.cursorPos.x, this.cursorPos.y)
                    this.clearCursor(this.cursorPos.x - this.fontSize/2 , this.cursorPos.y)
                    this.drawLastChar(this.textPos.x, this.textPos.y)
                }
                break
        }
    }
}


export default Terminal

