const { TestScheduler } = require('jest')
const buddyStrings = require('./buddyStrings').buddyStrings
const rob = require('./houseRobber2');

test('when buddystrings is given A="ab" and B="ba" it returns true', () => {
    expect(buddyStrings("ab", "ba")).toBe(true);
})
    
test('A=aa B=aa returns true', () => {
    expect(buddyStrings("aa", "aa")).toBe(true);
})

test('when houseRobber is given [2,3,2] it returns 3', () => {
    expect(rob([2,3,2])).toBe(3);
})

test('when houseRobber is given [1,2,3,1] it returns 4', () => {
    expect(rob([1,2,3,1])).toBe(4);
})

test('when houseRobber is given [0] it returns 0', () => {
    expect(rob([0])).toBe(0);
})

test('when houseRobber is given [1] it returns 1', () => {
    expect(rob([1])).toBe(1);
})
