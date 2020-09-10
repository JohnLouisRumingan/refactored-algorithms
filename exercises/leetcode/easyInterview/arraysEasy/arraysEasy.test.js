const singleNumber = require('./singleNumber');
const rotate = require('./rotateArray');

test('when singleNumber is given [1,1,2,4,2], it returns 4', () => {
    expect(singleNumber([1,1,2,4,2])).toBe(4);
})

test('when rotate is given nums=[1,2,3,4,5,6,7], k=3, it should return [5,6,7,1,2,3,4]', () => {
    expect(rotate([1,2,3,4,5,6,7],3)).toStrictEqual([5,6,7,1,2,3,4]);
})

test('when rotate is given nums = [-1,-100,3,99], k = 2, it should return [3,99,-1,-100]', () => {
    expect(rotate([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
})