const express = require('express')
const fs = require('fs')
const port = 3000



// Create an express app
const app = express()
app.set('view engine', 'pug')


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})





