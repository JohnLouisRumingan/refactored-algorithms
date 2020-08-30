/*
  Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    let arrS = s.split('');
    let arrT = t.split('');
    
    let dicS = createDict(arrS);
    let dicT = createDict(arrT);

    var sProps = Object.getOwnPropertyNames(dicS);
    var tProps = Object.getOwnPropertyNames(dicT);
    
    if(sProps.length != tProps.length) return false;
    for(let i=0; i<sProps.length; i++){
        
        let prop = sProps[i];
        
        if(dicS[prop] !== dicT[prop]) return false;
    }
    
    return true;
};


var createDict = function (arr) {
    
    let dictionary = {};
    for(let i=0; i<arr.length; i++){

    let char = arr[i];
    if(dictionary[char]) dictionary[char]++;
    else if (!dictionary[char]) dictionary[char] = 1;
    }
    return dictionary;
}