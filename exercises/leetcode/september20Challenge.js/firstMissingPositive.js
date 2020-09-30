/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3

Example 2:

Input: [3,4,-1,1]
Output: 2

Example 3:

Input: [7,8,9,11,12]
Output: 1

Follow up:

!!!!!!! IMPORTANT
Your algorithm should run in O(n) time and uses constant extra space.


!!!!!!
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  Your algorithm should run in O(n) time and uses constant extra space.
// time complexity O(n) and space complexity O(1).
// This algorithm requires destructive, in-place rearrangement
var firstMissingPositive = function(nums) {
    let shift = separate(nums);
    return findMissingPositive(nums.slice(shift))
};


// we need to move all the integers <1 to the left side of the array

var separate  = function(nums){
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] <= 0 ){
//             destructuring assignment, swap places in array
            [nums[count], nums[i]] = [nums[i], nums[count]];
            count++;
        }
    }
    return count;
}

var findMissingPositive = function(array) {
    
//     Given a subarray with just positive numbers, we know they must be filled
//     Takes this subarray, marks visited locations as negative, then returns with the first positive result which is the missing result
    for(let i=0; i<array.length; i++){
        if(Math.abs(array[i])-1 < array.length && array[Math.abs(array[i]) - 1] > 0){
            array[Math.abs(array[i]) - 1] = - array[Math.abs(array[i]) - 1];
        }
    }
//     goes through each index and looks for the number that is missing. If they are all "filled", returns n+1
    for(let i=0; i<array.length; i++){
        if(array[i] > 0) return i+1;
    }
    
    return array.length+1;
}

module.exports = firstMissingPositive;