/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

 

Constraints:

    s consists only of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    
    let word = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    
    let arr= word.split('');
    
    for(let i=0; i<(arr.length/2); i++){
        
        let front = arr[i];
        let back = arr[arr.length-1 - i];
        
        if(front != back) return false;
    }
    
    
    return true;
};