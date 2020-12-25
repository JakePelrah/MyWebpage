class Cursor {
    width
    height
    color
    _cursor
    constructor(color, width, height) {
        this.color = color;
        this.width = width
        this.height = height
        this._cursor = new ImageData(this.width, this.height)
        this.setColor(this.color)
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