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
    commands = ['resume', 'music']
    constructor(ctx) {
        this.ctx = ctx;
        this.cursor = new Cursor(Color.yellow,
            10, 20, this.ctx)
        this.kBuffer = new KeyBuffer()
        this.prompt = 'guest@jakePelrah:~$'
        this.setDisplay('#ffb000', '20px ubuntu mono')
    }

    setDisplay(color, font) {
        this.ctx.fillStyle = color
        this.ctx.font = font
    }

    drawPrompt(x, y) {
        this.x = x
        this.y = y
        this.ctx.fillText(this.prompt, this.x, this.y)
    }

    onEnter(){
        if(!this.kBuffer.empty()){
            console.log(this.kBuffer.toString())
            this.kBuffer.clear()
        }


        //process command
        //redraw prompt
    }


    update(ev){
        if(ev.key ==='Enter'){
            this.onEnter()

        }
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

