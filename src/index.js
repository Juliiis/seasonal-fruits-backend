const express = require('express')
const { getFruitsForMonth } = require('./services/availability')

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

    if (id === 'banana') {
        return res.json({
            "id": "banana",
            "name": "Banana",
            "freezed": false,
            "months": [1, 3],
            "properties": [
                "Good for your momma"
            ]
        })
    }

    return res.status(404).send()
})

app.listen(3001, () => {
    console.log('Ready and listening!')
})