/**
 * Cursor -terminal cursor
 */
class Cursor {
    _cursor
    constructor(color, width, height) {
        this._cursor = new ImageData(width, height)
        this.setColor(color)
    }

    setColor(color) {
        for (let i = 0; i < this._cursor.data.length; i += 4) {
            this._cursor.data[i] = color.r
            this._cursor.data[i + 1] = color.g
            this._cursor.data[i + 2] = color.b
            this._cursor.data[i + 3] = color.a
        }
    }


    get cursor() {
        return this._cursor;
    }
}

export default Cursor