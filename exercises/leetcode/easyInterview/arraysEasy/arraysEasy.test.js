const singleNumber = require('./singleNumber');
const rotate = require('./rotateArray');
const intersect = require('./intersectionTwoArraysII');
const twoSum = require('./twoSum');
const containsDuplicate = require('./containsDuplicate');
const plusOne = require('./plusOne');

test('when singleNumber is given [1,1,2,4,2], it returns 4', () => {
    expect(singleNumber([1,1,2,4,2])).toBe(4);
})

test('when rotate is given nums=[1,2,3,4,5,6,7], k=3, it should return [5,6,7,1,2,3,4]', () => {
    expect(rotate([1,2,3,4,5,6,7],3)).toStrictEqual([5,6,7,1,2,3,4]);
})

test('when rotate is given nums = [-1,-100,3,99], k = 2, it should return [3,99,-1,-100]', () => {
    expect(rotate([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
})

test('when intersect is given nums1 = [1,2,2,1], nums2 = [2,2], it should return [2,2]', () => {
    expect(intersect([1,2,2,1], [2,2])).toStrictEqual([2,2]);
})

test('when intersect is given nums1 = [4,9,5], nums2 = [9,4,9,8,4], is should return [4,9]', () => {
    expect(intersect([4,9,5], [9,4,9,8,4]).sort()).toEqual([4,9].sort());
})

test('when twoSum is given nums = [3,2,4], target = 6, it should return [1,2]', () => {
    expect(twoSum([3,2,4], 6).sort()).toEqual([1,2]);
})

test('when twoSum is given nums = [2,7,11,15], target = 9 it should return [0,1]', () => {
    expect(twoSum([2,7,11,15], 9).sort()).toEqual([0,1]);
})

test('twoSum should not return the same index given an array with duplicate elements', () => {
    expect(twoSum([3,3], 6).sort()).toEqual([0,1]);
    expect(twoSum([3,3], 6).sort()).not.toEqual([0,0]);
    expect(twoSum([3,3], 6).sort()).not.toEqual([1,1]);
})

test('when containsDuplicate is given [1,2,3,1] it should return true', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
})

test('when containsDuplicate is given [1,2,3,4] it should return false', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
})

test('when containsDuplicate is given [1,1,1,3,3,4,3,2,4,2] it should return true', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
})

test('when plusOne gets digits = [1,2,3], it returns [1,2,4]', () => {
    expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
})

test('when plusOne gets digits = [4,3,2,1], it returns [4,3,2,2]', () => {
    expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
})

test('when plusOne gets an array of [9,9,9] it correectly adds a new integer in front', () => {
    expect(plusOne([9,9,9])).toStrictEqual([1,0,0,0]);
})