const express = require('express')
const { getFruitsForMonth } = require('./services/availability')
const { getFruitById } = require('./services/fruits')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/available-fruits', (req, res) => {
    const { month } = req.query

    if (!month) {
        return res.status(400).send('You need to tell me ?month=, sweetie')
    }

    return res.json(getFruitsForMonth(month))
})

app.get('/fruit', (req, res) => {
    const { id } = req.query

    if (!id) {
        return res.status(400).send('You need to tell me ?id=') 
    }

    const fruit = getFruitById(id)
    
    if (!fruit) {
        return res.status(404).send()
    }

    return res.json(fruit)
})

app.listen(3001, () => {
    console.log('Ready and listening!')
})