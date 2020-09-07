const containsNearbyAlmostDuplicate = require("./containsDuplicate")
const wordPattern = require("./wordPattern")

test('when containsDuplicate is given [1,2,2,3,4,5] k=3 t=0 it should return true', () => {
    expect(containsNearbyAlmostDuplicate([1,2,2,3,4,5], 3, 0)).toBe(true);
});


test('when wordPattern is given "abba" and "dog cat cat dog" it returns true',() => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
})

test('when wordPattern is given duplicate words or patterns that are not bijections it returns false', () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
    expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
    expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
})