import Canvas from "../js/Canvas.js";
import Position from "../js/Position.js";
import KeyBuffer from "../js/KeyBuffer.js"

/**
 * Terminal -simulated canvas terminal
 */
class Terminal extends Canvas {
    promptPosition
    textPosition
    cursorPosition
    kBuffer

    constructor(id, width, height, font, color, promptStr) {
        super(id, width, height, font, color);
        this.fontSize = parseInt(font.split(' ')[0].match(/[0-9]+/)[0])
        this.promptStr = promptStr
        let marginTop = 40
        this.clearOffset = 10
        this.promptWidth = this.ctx.measureText(this.promptStr).width
        this.promptPosition = new Position(0, marginTop)
        this.textPosition = new Position(this.promptWidth + this.fontSize, marginTop)
        this.cursorPosition = new Position(0, 10)
        this.kBuffer = new KeyBuffer(/^[\w\s\.~`!@#$%^&*\\|(){}\[\]+=,/?<>:;'"_-]$/)
        this.drawPrompt()
        this.drawCursor()

        window.onkeydown = (ev) => {
            this.controller(ev)
        }
    }

    drawPrompt() {
        this.ctx.fillText(this.promptStr, this.promptPosition.x, this.promptPosition.y)
    }

    drawText() {
        this.ctx.fillText(this.kBuffer.toString(), this.textPosition.x, this.textPosition.y)
    }

    clearCharacter() {
        let textWidth = this.ctx.measureText(this.kBuffer.toString()).width
        this.ctx.clearRect(this.promptWidth + textWidth + this.fontSize,
            this.textPosition.y - this.fontSize, 20, 40)
    }

    drawCursor() {
        let textWidth = this.ctx.measureText(this.kBuffer.toString()).width
        this.ctx.fillRect(this.promptWidth + textWidth + this.fontSize, this.cursorPosition.y, 20, 40)
    }

    clearCursor() {
        let textWidth = this.ctx.measureText(this.kBuffer.toString()).width
        this.ctx.clearRect(this.promptWidth + textWidth + this.clearOffset, this.cursorPosition.y, 20, 40)
    }

    enter(){
        //Process the command
        this.kBuffer.clear()
        this.promptPosition.y += this.fontSize
        this.textPosition.y += this.fontSize
        this.cursorPosition.y += this.fontSize
        this.clearCursor()
        this.drawPrompt()
        this.drawCursor()
    }


    backspace(){
        this.kBuffer.pop()
        this.clearCharacter()
        this.drawCursor()
        this.clearOffset = 50
        this.clearCursor(50)
    }


    update(ev){
        if (ev.key.match(/^[\w\s\.~`!@#$%^&*\\|(){}\[\]+=,/?<>:;'"_-]$/)) {
            this.clearOffset = 10
            this.kBuffer.push(ev)
            this.drawCursor()
            this.clearCursor()
            this.drawText()
        }
    }

    controller(ev) {
        switch (ev.key) {
            case 'Enter':
                this.enter()
                break
            case 'Backspace':
                this.backspace()
                break
            default:
                this.update(ev)
                break
        }


    }

}

export default Terminal

