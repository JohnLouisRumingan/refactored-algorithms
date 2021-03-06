/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45

*/

function maxStairs(n){

    let memo = [];

    return climbStairs(0, n, memo)
}


function climbStairs(i, n, memo){

    if(i>n) return 0;
    if(i === n) return 1;
    if(memo[i] > 0 ){
        return memo[i];
    }
    memo[i] = climbStairs(i+1, n, memo) + climbStairs(i+2, n, memo);
    return memo[i];
}


module.exports = maxStairs;