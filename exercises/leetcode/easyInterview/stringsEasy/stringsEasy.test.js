const validPar = require('./validParentheses');
const firstUniqueChar = require('./firstUniqueCharacterInString');

test('when validPar is given s="()" it should return true', () => {
    expect(validPar("()")).toBe(true);
})

test('when validPar is given s="()[]{}" it should return true', () => {
    expect(validPar("()[]{}")).toBe(true);
})

test('when validPar is given s="(]" it should return false', () => {
    expect(validPar("(]")).toBe(false);
})

test('when validPar is given s="([)]" it should return false', () => {
    expect(validPar("([)]")).toBe(false);
})

test('when validPar is given s="{[]}" it should return true', () => {
    expect(validPar("{[]}")).toBe(true);
})