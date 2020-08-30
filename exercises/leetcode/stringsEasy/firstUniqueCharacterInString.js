/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

 

Note: You may assume the string contains only lowercase English letters.
*/


/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    if(s.length === 1) return 0;
    if(s.length <= 0) return -1;
    
    let frequency = {};
    
    let arr = s.split('');
    
    for(let i=0; i<arr.length; i++){
        
        let char = arr[i];
        if(frequency[char]) frequency[char] += 1;
        else if(!frequency[char]) frequency[char] = 1;
    }
    
    for(let i=0; i<arr.length; i++){
        
        if(frequency[arr[i]] === 1) return i;
        else if(frequency[arr[i]] !== 1 && i === arr.length-1) return -1;
    }
};