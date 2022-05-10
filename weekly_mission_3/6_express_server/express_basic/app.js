// Using Express object
const express = require('express')

// Express' app
const app = express()

// Port going to be used by our app = localhost:3000
const port = 3000

// Initial path, it will answer to the url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Answering with text
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})

// Returning objects
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: 'Hello' }
    res.send(explorer)
})

// Query Params: Receive parameters through URL
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName": "carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// We initialize the app with the following
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})