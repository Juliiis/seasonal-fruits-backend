const { getFruitsForMonth, isFruitAvailableInMonth } = require('./availability')

describe('services/availability', () => {
    describe(isFruitAvailableInMonth, () => {
        describe('for fruits that are going from month 1 to 4', () => {
            const fruit = {
                monthStart: 1,
                monthEnd: 4
            }

            it('should return true when asking for month 2', () => {
                const month = 2
                expect(isFruitAvailableInMonth(fruit, month)).toBe(true)
            })
    
            it('should return false when asking for month 7', () => {
                const month = 7
                expect(isFruitAvailableInMonth(fruit, month)).toBe(false)
            })
        })
        describe('for fruits that are going from one year to the other', () => {
            const fruit = {
                monthStart: 10,
                monthEnd: 4
            }

            it('should return true when asking for month 2', () => {
                const month = 2
                expect(isFruitAvailableInMonth(fruit, month)).toBe(true)
            })
    
            it('should return false when asking for month 7', () => {
                const month = 7
                expect(isFruitAvailableInMonth(fruit, month)).toBe(false)
            })
        })
    })
    describe(getFruitsForMonth, () => {
        describe('for month 8', () => {
            const fruitIds = getFruitsForMonth(8).map(fruit => fruit.id)
            it('should return apple and watermelon', () => {
                expect(fruitIds.includes('apple')).toBe(true)
                expect(fruitIds.includes('watermelon')).toBe(true)
            })
            it('should not return grape', () => { 
               expect(fruitIds.includes('grape')).toBe(false)
            })
        })
    })
})