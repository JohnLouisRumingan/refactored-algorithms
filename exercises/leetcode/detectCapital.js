/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

 

Example 1:

Input: "USA"
Output: True

 

Example 2:

Input: "FlaG"
Output: False

 

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    //     go through all letters, use regex to determine if a letter is a capital.
    //     keep running counter of capital letters. If capital letters = 0 or = 1 at first letter or equals all, return true. Otherwise, return false.
        
        let capitals = 0;
        let regexp = /^[A-Z]/;
        let firstCap = regexp.test(word[0]);
        
        for(let i=0; i<word.length; i++){
            
            if(regexp.test(word[i])){
                capitals ++;
            }
        }
        
        if(capitals === word.length) return true;
        else if(capitals === 1 && firstCap) return true;
        else if (capitals === 0) return true;
        else return false;
    };