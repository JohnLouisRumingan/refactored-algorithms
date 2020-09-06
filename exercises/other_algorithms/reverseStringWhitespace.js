/*
You are given a character array containing a set of words separated by whitespace. Your task is to modify that character array so that the words all appear in reverse order. Do this without using any extra space.

Example

input - ['A', 'l', 'i', 'c', 'e', ' ', 'l', 'i', 'k', 'e', 's', ' ', 'B', 'o', 'b']

output - ['B', 'o', 'b', ' ', 'l', 'i', 'k', 'e', 's', ' ', 'A', 'l', 'i', 'c', 'e']

*/

function reverseStringArray(arr){

    for(let i=0; i<(arr.length/2); i++){
        let front = arr[i];
        let back = arr[arr.length-1-i];
        arr[i] = back;
        arr[arr.length-1-i] = front;
    }
    
    arr.push(" ");

    // console.log("reversed array:", arr)

    let i = 0;
    let start = 0;

    while (i < arr.length){

        if(arr[i] === " "){
            let length = i-start;
            for(let k=0; k<(length/2); k++){
                let front = arr[start+k];
                let back = arr[start+length-1-k];
                arr[start+k] = back;
                arr[start+length-1-k] = front;
                start = i + 1;
            }
        }
        
        i ++;
    }

    arr.pop();

    // console.log("double reversed",arr)
    return arr;
}


module.exports = reverseStringArray;