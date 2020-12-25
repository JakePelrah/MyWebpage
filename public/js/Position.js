/**
 * Position - canvas position
 */
class Position {
    _x
    _y
    constructor(x, y) {
        this._y = y;
        this._x = x;
    }

    addX(delta){
        this._x +=delta
    }

    addY(delta){
        this._y +=delta
    }

    get x() {
        return this._x;
    }

    get y(){
        return this._y
    }
}


export  default  Position