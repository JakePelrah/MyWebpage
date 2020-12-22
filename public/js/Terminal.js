import Cursor from "../js/Cursor.js";

class Terminal {
    cursor
    ctx

    constructor(color, ctx) {
        this.ctx = ctx
        this._cursor = new Cursor(color, 10, 20, this.ctx)
        this._cursor.setPosition([0, 0])
        this._cursor.setBlinking(true)
    }


    get cursor() {
        return this._cursor;
    }

// console.log(ev)
    // keyBuffer.push(ev.key)
    // ctx.fillText(keyBuffer.join(''), 0, 100)
    // ctx.fillText(, 10, 15)


}


export default Terminal