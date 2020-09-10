const singleNumber = require('./singleNumber');


test('when singleNumber is given [1,1,2,4,2], it returns 4', () => {
    expect(singleNumber([1,1,2,4,2])).toBe(4);
})