const containsNearbyAlmostDuplicate = require("./containsDuplicate")

test('when containsDuplicate is given [1,2,2,3,4,5] k=3 t=0 it should return true', () => {
    expect(containsNearbyAlmostDuplicate([1,2,2,3,4,5], 3, 0)).toBe(true);
});