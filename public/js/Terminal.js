import Canvas from "../js/Canvas.js";


/**
 * Terminal -simulated canvas terminal
 */
class Terminal extends Canvas {

    promptPosition
    textPosition
    cursorPosition
    constructor(id, width, height, font, color, promptStr) {
        super(id, width, height, font, color);
        this.promptStr = promptStr
        window.onkeydown = (ev)=>{
            this.update(ev)
        }
    }


    update(ev){
        this.prompt.drawPrompt()
        this.prompt.position.x+=10
        console.log(ev)
    }






}

export default Terminal

