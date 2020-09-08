const maxProfit = require('./bestTimeToBuyAndSellStock');

test('when maxProfit is given [7,1,5,3,6,4] it should return 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
});

test('maxProfit returns -1 if given an array with length 0 or an object with a length property', () => {
    expect(maxProfit([])).toBe(-1);
})

test('maxProfit returns 0 if given an array with length 1, seller can only buy but not sell', () => {
    expect(maxProfit([1])).toBe(0);
    expect(maxProfit([-1])).toBe(0);
})

test('maxProfit returns 0 if there are no positive deltas in stock price', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
})

test('maxProfit returns 0 if there are no positive deltas in stock price', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
})