const { TestScheduler } = require('jest')
const buddyStrings = require('./buddyStrings').buddyStrings

test('when buddystrings is given A="ab" and B="ba" it returns true', () => {
    expect(buddyStrings("ab", "ba")).toBe(true);
})
    
test('A=aa B=aa returns true', () => {
    expect(buddyStrings("aa", "aa")).toBe(true);
})
