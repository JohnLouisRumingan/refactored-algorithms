const validPar = require('./validParentheses');
const firstUniqueChar = require('./firstUniqueCharacterInString');
const firstUniqChar = require('./firstUniqueCharacterInString');

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

test('when firstUniqueChar is given leetcode it should return 0', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
})

test('when firstUniqueChar is given loveleetcode it should return 2', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
})