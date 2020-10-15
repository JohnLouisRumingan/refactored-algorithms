/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [0]
Output: 0

 

Constraints:

    1 <= nums.length <= 100
    0 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length <=0 || nums == null) return 0;
    if(nums.length == 1 ) return nums[0];
    
//     add all houses from element 0 to n-1
//     add all houses from element 1 to n
//     return higher value
//     create two subArrays, one starting from i=0 until i=nums.length-2, other from i=1 to i=nums.length-1
    let house0 = nums.slice(0, nums.length-1);
    let house1 = nums.slice(1, nums.length);
    
    console.log(houseRob(house0), houseRob(house1))
    
    return Math.max(houseRob(house0), houseRob(house1))
};

function houseRob(nums){
    
    if(nums.length <=0 || nums == null) return 0;
    if(nums.length == 1 ) return nums[0];
    
    let total = [];
    total[0] = nums[0];
    total[1] = (Math.max(nums[0], nums[1]));
    
    for(let i=2; i<nums.length; i++){
        //create temp subarray, then push the max value to total array
        let tempSub = total.slice(0, i-1);
        tempSub = tempSub.map(num => num+nums[i]);
        tempSub.push(nums[i]);
        total.push(Math.max(...tempSub))
    }
    
    return Math.max(...total);
}

module.exports = rob;