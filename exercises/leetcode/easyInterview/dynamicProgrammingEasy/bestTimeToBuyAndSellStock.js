/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    if(prices.length <= 0) return -1;
    if(prices.length === 1) return 0;
    
    // let profit=0;

    // // naive first-pass version:
    // for(let i=0; i<prices.length; i++){
    //     let buyPrice = prices[i];
        
    //     for(let k=(i+1); k<prices.length; k++){
    //         let sellPrice = prices[k];
    //         let tempProfit = sellPrice - buyPrice;
    //         if(tempProfit > profit){ profit = tempProfit;}
    //     }
    // }
    // return profit;

    // we can instead have two variables where we record the current minPrice and the maxProfit

    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++){

        if(prices[i] < minPrice) {minPrice = prices[i];}
        else if((prices[i] - minPrice) > maxProfit) {maxProfit = (prices[i] - minPrice)}
    }


    return maxProfit;
};

module.exports = maxProfit;