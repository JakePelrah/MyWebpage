/**
 * keyBuffer -filter and collect keystrokes in an array
 */
class keyBuffer {
    buffer

    constructor() {
        this.buffer = []
    }

    /**
     * update -process keydown event
     * @param ev
     */
    update(ev){
        let key = ev.key

        //Match alphanumeric and some special characters
        let regex = /^[\w\s!@#$%^&*()_-]$/

        if (key.match(regex)) {
            this.buffer.push(key)
        }
        else if(key === 'Backspace'){
            this.buffer.pop()
        }
        console.log(this.toString())
    }

    toString() {
        return this.buffer.join('')
    }
}

export default keyBuffer
