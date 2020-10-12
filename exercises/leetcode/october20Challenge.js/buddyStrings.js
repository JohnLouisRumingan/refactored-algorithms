
// naive solution: O(n^2) time, O(n) space
var buddyStrings = function(A,B){

    const string = A.slice().split('');
    const target = B.slice().split('');

    for(let i=0; i<string.length-1; i++){
        for(let j= i+1; j<string.length; j++){
            let temp = string[i];
            string[i] = string[j];
            string[j] = temp;

            if(JSON.stringify(string) === JSON.stringify(target)) return true;
            else{
                string[j] = string[i];
                string[i] = temp;
            }
        }
    }
    return false;
}


// optimal solution: O(n) time, O(n) space
var optimalBuddyStrings = function(A, B){

// create dictionaries with key value pairs, then see if you can switch dictionary spaces

}

module.exports = {buddyStrings, optimalBuddyStrings};