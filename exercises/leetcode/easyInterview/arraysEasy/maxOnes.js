/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:

    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
*/



var findMaxConsecutiveOnesReview = function(nums) {

    let max = 0;
    let current = 0;

    for(let i=0; i<nums.length; i++){
        let num = nums[i];

        if(num == 1){
            current++;
            if(current > max) max = current;
        }
        else{
            current = 0;
        }
    }

    return max;
}

































/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let maxOne = 0;
    let currentOne = 0;
    
    if(nums.length <=0) return maxOne;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            currentOne ++;
        }
        else{
            currentOne = 0;
        }
        
        if(currentOne > maxOne) maxOne = currentOne;
    }
    
    return maxOne;
};