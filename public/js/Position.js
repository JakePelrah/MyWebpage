/**
 * Position - canvas position
 */
class Position {
    x
    y
    constructor(x, y) {
        this.y = y;
        this.x = x;
    }

    toString(){
        return `${this.x}${this.y}`
    }
}


export  default  Position