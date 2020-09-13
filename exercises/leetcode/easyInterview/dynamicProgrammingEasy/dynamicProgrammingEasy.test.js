const maxProfit = require('./bestTimeToBuyAndSellStock');
const maxStairs = require('./climbStairs');
const maxSubarray = require('./maximumSubarray');
const rob = require('./houseRobber');

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

test('maxSubarray returns 6 when given nums = [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
})

test('maxSubarray correctly returns the output of an array containing a single element', () => {
    expect(maxSubarray([1])).toBe(1);
    expect(maxSubarray([0])).toBe(0);
    expect(maxSubarray([-2147483647])).toBe(-2147483647);
})

test('houseRobber returns the correct maximum sum from provided test cases', () => {
    expect(rob([1,2,3,1])).toBe(4);
    expect(rob([2,7,9,3,1])).toBe(12);
})

test('houseRobber gives correct return for edge cases', () => {
    expect(rob([])).toBe(0);
    expect(rob()).toBe(0);
})

test('houseRobber does not compare two subarrays starting at i=0 and i=1', () => {
    expect(rob([2,1,1,2])).toBe(4);
    expect(rob([2,1,1,2])).not.toBe(3);
})

// test('when maxStairs is given an input of 2 it should return 2', () => {
//     expect(maxStairs(2)).toBe(2);
// })

// test('when maxStairs is given an input of 3, it should return 3', () => {
//     expect(maxStars(3)).toBe(3);
// })