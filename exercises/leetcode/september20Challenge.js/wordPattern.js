/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

// time Complexity O(n^2) time due to object.values enumerable lookup.
var wordPattern = function(pattern, str) {
    
    const strA = str.split(" ");
    const patA = pattern.split("");
    
    if(strA.length !== patA.length) return false;
    
//     let q = [];
    
//     for(let i=0; i<patA.length; i++){
//         q.push([patA[i], strA[i]]);
//     }
    
    let dict = {};
    
    for(let i=0; i<patA.length; i++){
        if(!dict[patA[i]]){
            if(Object.values(dict).includes(strA[i])) return false;
            dict[patA[i]] = strA[i];
        }
        else{
            if(dict[patA[i]] !== strA[i]) return false;
        }
    }
    
    return true;
};

module.exports = wordPattern;