/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let dict = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    const sArr = s.split('');
    let stack = [];
    
    for(let i=0; i<sArr.length; i++){
        let char = sArr[i];
        if(dict.hasOwnProperty(char)){
            if(dict[char] !== stack.pop()) return false;
        }
        else{
            stack.push(char);
        }
    }
    
    if(stack.length === 0 ) return true;
    else return false;
};

module.exports = isValid;