/**
 * keyBuffer -filter and collect keystrokes in an array
 */
class keyBuffer {
    buffer

    constructor() {
        this.buffer = []
    }

    clear() {
        this.buffer = []
    }

    empty() {
        return this.buffer.length === 0
    }

    /**
     * update -process keydown event
     * @param ev
     */
    update(ev) {
        let key = ev.key

        //Match alphanumeric and some special characters
        let regex = /^[\w\s!@#$%^&*()_-]$/

        if (key.match(regex)) {
            this.buffer.push(key)
        } else if (key === 'Backspace') {
            this.buffer.pop()
        }
    }

    toString() {
        return this.buffer.join('')
    }
}

export default keyBuffer
