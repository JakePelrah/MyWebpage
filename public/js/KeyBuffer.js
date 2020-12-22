class keyBuffer {
    keyBuffer

    constructor() {
        this.keyBuffer = [];
    }


    push(symbol) {
        if (symbol.match(/\w|[-\s!@#$%^&*()]/)) {

            this.keyBuffer.push(symbol)
        }

        pop()
        {
            this.keyBuffer.pop()
        }


        refresh()
        {

        }
    }
}
