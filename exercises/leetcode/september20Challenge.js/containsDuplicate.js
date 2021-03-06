/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true

Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
    if(nums.length <= 1) return false;
    
//     two pointer approach, two pointer indices cannot differ by more than k 
//     absolute value of the elements cannot differ by more than t
    
    let start = 0;
    let end = 1;
    
    while(end !== nums.length){
        
        if(Math.abs(nums[end] - nums[start]) <= t) {
            return true;
        }
        
        if((end-start)==k){ 
            start ++;
            end = start+1;
        }
        else{end++;}
    }
    return false;
};

module.exports = containsNearbyAlmostDuplicate;