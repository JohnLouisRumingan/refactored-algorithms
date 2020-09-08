/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    // return 0 if reversed integer overflows: Number.MAX_VALUE
    
    let negative = 1;
    let strInt;
    
    if(x < 0 ){
        
        negative = -1;
        strInt = (x * -1).toString();
    }
    else{
        strInt = x.toString();
    }
    
    strInt = strInt.split('');
    for(let i=0; i<(strInt.length/2); i++){
        
        let front = strInt[i];
        let back = strInt[strInt.length-1-i];
        
        strInt[i] = back;
        strInt[strInt.length-1-i] = front;
    }
    
    if(negative === -1){
        strInt.unshift("-")
    }
    
    strInt = strInt.join('');
    num = Number.parseInt(strInt, 10);
    
    if (num >= 2 ** 31 || num <= (-2)**31) return 0;
        
    return num;
};