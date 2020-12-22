class Terminal {
    ctx


    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.font = '20px ubuntu mono'
        this.ctx.fillStyle = '#ffb000'
        this.ctx.fillText('guest@jakePelrah:~$', 10, 20)
    }

}


export default Terminal

