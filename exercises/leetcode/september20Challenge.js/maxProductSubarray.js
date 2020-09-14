/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//naive solution
var maxProduct = function(nums) {
    
    if(nums.length ===1 ) return nums[0];
    
    let largestProduct = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<nums.length; i++){
        let runningTotal = nums[i];
        
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] >largestProduct) largestProduct = nums[i];
            if(nums[j] > largestProduct) largestProduct = nums[j];
            runningTotal *= nums[j];
            if(runningTotal > largestProduct) largestProduct = runningTotal;
        }
    }
    
    
    return largestProduct;
};

module.exports = maxProduct;