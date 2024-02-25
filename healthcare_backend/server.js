const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Up and running!!!')
})

app.listen(port, () => {
    console.log(`Healthcare app listening on port ${port}`)
})