/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//  review, v2
var intersect = function(nums1, nums2) {
   
    // create dictionary of first array 
    // while traversing second array, look up dictionary and if it exists, remove one from value and store it in a new array 
    // return array 

    let intersection = [];
    let d1 = {};

    for(let i=0; i<nums1.length; i++){
        d1[nums1[i]]? d1[nums1[i]]++ : d1[nums1[i]] = 1;
    }

    for(let i=0; i<nums2.length; i++){
        let num = nums2[i];

        if(d1[num]){
            d1[num]--;
            intersection.push(num);
            if(d1[num] < 1) delete d1[num];
        }
    }

    // console.log(intersection)
    return intersection;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
    
//     let hash1 = {};
//     let answer = [];
    
//     for(let i=0; i<nums1.length; i++){
//         hash1[nums1[i]]? hash1[nums1[i]]++ : hash1[nums1[i]] = 1;
//     }
    
//     for(let i=0; i<nums2.length; i++){
//         if(hash1.hasOwnProperty(nums2[i])){
//             answer.push(nums2[i]);
//             hash1[nums2[i]]--;
//             if(hash1[nums2[i]]===0){
//                 delete hash1[nums2[i]];
//             }
//         }
//     }
    
//     return answer;
// };

module.exports = intersect;