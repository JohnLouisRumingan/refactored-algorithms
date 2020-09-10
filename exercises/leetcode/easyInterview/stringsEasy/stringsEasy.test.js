const validPar = require('./validParentheses');

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