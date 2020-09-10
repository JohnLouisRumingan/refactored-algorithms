const romanToInt = require('./romanToInteger');

test('when romanToInt is given III, it returns 3', () => {
    expect(romanToInt("III")).toBe(3);
})