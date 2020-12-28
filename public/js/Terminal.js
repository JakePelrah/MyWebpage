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

        //String positions
        this.textPos = new Position(this.getStringWidth(this.promptStr) + this.fontSize / 2, this.fontSize)
        this.promptPos = new Position(0, this.fontSize)
        this.cursorPos = new Position(this.getStringWidth(this.promptStr) + this.fontSize / 2, (this.fontSize / 2) / 2)

        //Draw calls
        this.drawPrompt(this.promptPos.x, this.promptPos.y)
        // this.drawCursor(this.cursorPos.x, this.cursorPos.y)

        //Set listener for key input
        window.onkeydown = (ev) => {
            this.update(ev)
        }
    }


    drawPrompt(x, y) {
        this.ctx.fillText(this.promptStr, x, y)
    }


    getStringWidth(string) {
        return this.ctx.measureText(string).width
    }

    drawLastChar(x, y) {
        this.ctx.fillText(this.kBuffer.lastChar(), x, y)
    }

    clearLastChar(x, y) {
        this.ctx.clearRect(x, y, this.fontSize / 2, this.fontSize)

    }


    update(ev) {
        switch (ev.key) {
            case 'Enter':
                //process command in buffer
                //Clear buffer contents
                this.kBuffer.clear()
                //Move prompt, cursor and text output to next line
                this.promptPos.y += this.fontSize
                this.cursorPos.y += this.fontSize
                this.textPos.y += this.fontSize
                //Move cursor and text output back to a position after the prompt
                this.cursorPos.x = this.getStringWidth(this.promptStr) + this.fontSize / 2
                this.textPos.x = this.getStringWidth(this.promptStr) + this.fontSize / 2
                this.drawPrompt(this.promptPos.x, this.promptPos.y)
                break
            case 'Backspace':
                //Pop buffer
                this.kBuffer.pop()
                let string = this.kBuffer.toString()
                //Move cursor and text position one chatac
                this.cursorPos.x = this.promptLen + this.getStringWidth(string) + this.fontSize
                this.textPos.x = this.promptLen + this.getStringWidth(string) + this.fontSize / 2
                this.clearLastChar(this.cursorPos.x, this.cursorPos.y)
                break
            default:
                if (this.kBuffer.push(ev)) {
                    this.textPos.x += this.fontSize / 2
                    this.drawLastChar(this.textPos.x, this.textPos.y)
                }
                break
        }
    }
}


export default Terminal

