const allFruits = require('../../data/fruits.json')

const isFruitAvailableInMonth = (fruit, month) => {
    const { monthStart, monthEnd } = fruit

    if (monthStart >= monthEnd) {
        if (monthStart <= month){
            return true
        } else if (monthEnd >= month){
            return true
        }
    }

    if (monthStart <= month && monthEnd >= month) {
        return true
    }
    return false
}

const getFruitsForMonth = (month) => {
    return allFruits.filter(fruit => {
        if (isFruitAvailableInMonth(fruit, month)) {
            return true
        }
    })
}

module.exports = {
    getFruitsForMonth,
    isFruitAvailableInMonth,
}