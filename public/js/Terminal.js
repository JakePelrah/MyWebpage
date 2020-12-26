import KeyBuffer from '../js/KeyBuffer.js'
import Cursor from '../js/Cursor.js';
import Position from './Position.js'
import Canvas from "../js/Canvas.js";

/**
 * Terminal -simulated canvas terminal
 */
class Terminal {
    canvas
    ctx
    cursor
    kBuffer
    promptPos
    textPos
    cursorPos
    promptStr
    promptWidth = 0

    constructor(id, font, color) {
        this.canvas = new Canvas(id)
        this.ctx = this.canvas.ctx
        this.color = color
        this.ctx.font = font
        this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`
        this.cursor = new Cursor(10, 20)
        this.kBuffer = new KeyBuffer()
        this.promptPos = new Position(0, 20)
        this.promptStr = 'guest@jakepelrah:~$'
        this.textPos = new Position(10, 20)
        this.cursorPos = new Position(200, 5)
        this.cursor.setColor(this.color)
        this.drawPrompt()
        this.drawCursor()
    }

    drawCursor() {
        this.ctx.putImageData(this.cursor.ImageData, this.cursorPos.x, this.cursorPos.y)
    }

    drawPrompt() {
        this.ctx.fillText(this.promptStr, this.promptPos.x, this.promptPos.y)
    }

    getTextWidth(string) {
        return this.ctx.measureText(string).width
    }

    resize() {
        this.canvas.resize()
        this.ctx.font = `${window.innerHeight/window.innerWidth * 40}px UbuntuMono`
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.ctx.fillRect(0, 0, 39, 39)
        this.ctx.putImageData(this.cursor.ImageData,0,0)

    }

    backspace() {
        //Remove last symbol in the buffer
        this.kBuffer.pop()
        //get updated string width
        let textWidth = this.getTextWidth(this.kBuffer.toString())
        //Clear the popped symbol from the screen
        this.ctx.clearRect(this.promptWidth + textWidth + 10, this.textPos.y - 15, 20, 20)
        //Redraw the cursor to reflect removing the character
        this.ctx.putImageData(this.cursor.ImageData, this.promptWidth + textWidth + 10, this.cursorPos.y)
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
        this.ctx.fillText(this.promptStr, this.promptPos.x, this.promptPos.y)
        //Redraw the cursor
        this.ctx.putImageData(this.cursor.ImageData, this.promptWidth + 10, this.cursorPos.y)
        //Clear the buffer
        this.kBuffer.clear()
    }

    processKey(ev) {
        this.kBuffer.push(ev)
        let textWidth = this.getTextWidth(this.kBuffer.toString())
        //Draw the cursor to reflect end of current line
        this.ctx.putImageData(this.cursor.ImageData, this.promptWidth + textWidth + 10, this.cursorPos.y)
        //Clear the prev location of the cursor
        this.ctx.clearRect(this.promptWidth + textWidth, this.cursorPos.y, 10, 20)
        //Draw input string to screen
        this.ctx.fillText(this.kBuffer.toString(), this.promptWidth + 10, this.textPos.y)
    }

    update(ev) {
        this.promptWidth = this.getTextWidth(this.promptStr)
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

