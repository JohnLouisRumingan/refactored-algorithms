const reverseStringWhitespace = require('./reverseStringWhitespace')


test('reverseStringWhitespace should accept ', () => {
    expect(reverseStringWhitespace(['A', 'l', 'i', 'c', 'e', ' ', 'l', 'i', 'k', 'e', 's', ' ', 'B', 'o', 'b']))
    .toStrictEqual(['B', 'o', 'b', ' ', 'l', 'i', 'k', 'e', 's', ' ', 'A', 'l', 'i', 'c', 'e']);
});