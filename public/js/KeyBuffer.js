/**
 * keyBuffer -filter and collect keystrokes in an array
 */
class keyBuffer {
    buffer

    constructor(regex) {
        this.regex = regex
        this.buffer = []
    }

    clear() {
        this.buffer = []
    }

    /**
     * update -process keydown event
     * @param ev
     */
    push(ev) {
        let key = ev.key
        if (key.match(this.regex)) {
            this.buffer.push(key)
        }
    }

    pop() {
        this.buffer.pop()
    }

    toString() {
        return this.buffer.join('')
    }
}

export default keyBuffer
