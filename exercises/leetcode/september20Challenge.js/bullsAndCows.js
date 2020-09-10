/*
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.

Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    if(secret.length === 0 ) return "OAOB";
    let dict = {}; // element : idx
    let cows = 0;
    let bulls = 0;
    let cowDict = {}; //element : guesses
    
    for(let i=0; i<secret.length; i++){
        dict[secret[i]]? dict[secret[i]].push(i) : dict[secret[i]] = [i];
    }
    // console.log("dict:", dict)
    
    for(let i=0; i<guess.length; i++){
        let currentGuess = guess[i];
        
        if(dict.hasOwnProperty(currentGuess) && dict[currentGuess].includes(i)){
            bulls ++;
            dict[currentGuess] = removeElement(dict[currentGuess], i);
            if(dict[currentGuess].length === 0) delete dict[currentGuess];
        }
        else if(dict.hasOwnProperty(currentGuess)){
            
            // console.log(dict, cowDict)
            if(dict[currentGuess].length > cowDict[currentGuess] || !cowDict[currentGuess]){
                cows ++;
                cowDict[currentGuess]? cowDict[currentGuess]++ : cowDict[currentGuess] = 1;
                // console.log(cowDict)
            }
        }
    }
    
    for(let guess in cowDict){
        if(!dict.hasOwnProperty(guess)){
            cows -= cowDict[guess];
        }
    }
    
    // console.log("bulls", bulls, "cows", cows)
    
    return `${bulls}A${cows}B`
};

function removeElement (arr, element){
    
    for(let i=0; i<arr.length; i++){
        if(element === arr[i]){
            arr.splice(i,1)
        }
    }
    
    return arr;
}

module.exports = getHint;