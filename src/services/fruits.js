const allFruits = require('../../data/fruits.json')

const getFruitById = (id) => {
    return allFruits.find(fruit => {
        return id === fruit.id 
    })
}


module.exports = {
   getFruitById
}