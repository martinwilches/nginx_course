const express = require('express')
const path = require('path')

const app = express()
const port = 8000

const replicaApp = process.env.APP_NAME

// servir contenido estatico (imagenes, css, etc)
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    console.log(`Requested served by ${replicaApp}`)
})

app.listen(port, () => {
    console.log(`${replicaApp} running on port ${port}`)
})
