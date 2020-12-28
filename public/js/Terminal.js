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
        this.kBuffer = new KeyBuffer(regex)
        this.drawPrompt(0, this.fontSize)
        this.drawCursor(this.getStringWidth(this.promptStr)+ this.fontSize/2, 5)
        window.onkeydown = (ev) => {
            this.update(ev)
        }
    }

    getStringWidth(string) {
        return this.ctx.measureText(string).width
    }

    drawChar(x, y) {
        this.ctx.fillText(this.kBuffer.lastChar(), x, y)
    }

    drawCursor(x, y) {
        this.ctx.fillRect(x, y, this.fontSize / 2, this.fontSize)
    }

    clearCursor(x,y){
        this.ctx.fillRect(x,y,this.fontSize/2, this.fontSize)
    }

    drawPrompt(x, y) {
        this.ctx.fillText(this.promptStr, x, y)
    }


    update(ev) {
        switch (ev.key) {
            case 'Enter':
                break
            case 'Backspace':
                this.kBuffer.pop()
                break
            default:
                if (this.kBuffer.push(ev)) {
                }
                break
        }
    }
}


export default Terminal

