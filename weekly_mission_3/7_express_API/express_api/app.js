// Using Express object
const express = require('express')

// Express' app
const app = express()

// Use JSON
app.use(express.json())

// Port going to be used by our app = localhost:3000
const port = 3000

// HTTP Methods
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`)

    const explorer1 = { id: 1, name: "Carlo1"}
    const explorer2 = { id: 2, name: "Carlo2"}
    const explorer3 = { id: 3, name: "Carlo3"}
    const explorer4 = { id: 4, name: "Carlo4"}
    const explorer5 = { id: 5, name: "Carlo5"}

    const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]

    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    // const explorer = {id: 1, name: "Carlo"}

    const explorers = [
        { id: 1, name: "Carlo1"},
        { id: 2, name: "Carlo2"},
        { id: 3, name: "Carlo3"},
        { id: 4, name: "Carlo4"},
        { id: 5, name: "Carlo5"}
    ]

    explorer = explorers.find((element) => element.id == req.params.id)

    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)

    // Client's parameters
    const requestBody = req.body

    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)

    // Client's parameters
    const requestBody = req.body

    res.status(200).json({message: 'Updated!'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)

    // Client's parameters
    const requestBody = req.body

    res.status(200).json({message: "Deleted"})
})

// We initialize the app with the following
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})