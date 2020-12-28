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
            return true
        }
        return false
    }

    pop() {
        this.buffer.pop()
    }

    toString() {
        return this.buffer.join('')
    }

    lastChar(){
        return this.buffer[this.buffer.length-1]
    }
}

export default keyBuffer
