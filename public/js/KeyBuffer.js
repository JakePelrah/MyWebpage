class keyBuffer {
    buffer
    constructor(buffer) {
        this.buffer = []
    }

    update(ev){
        let key = ev.key

        if (key.match(/^[\w\s!@#$%^&*()_-]$/)) {
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
