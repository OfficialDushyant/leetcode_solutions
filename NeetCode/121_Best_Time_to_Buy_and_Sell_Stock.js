/**
 * @param {number[]} prices
 * @return {number}
 * 
 * Complexity
 * Time O(N) | Space O(1) 
 * 
 * Runtime: 153 ms, faster than 19.40% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 51.7 MB, less than 67.57% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */
 var maxProfit = function(prices) {
    let max = min = prices[0];
    let value = 0;
    for(let i = 0; i < prices.length - 1; i++){
        if(prices[i] <= min){
            max = min = prices[i];
        } else if(prices[i] > max) {
            max = prices[i];
        }
        value = (max - min > value)? max - min : value; 
    }
    return value;
};

console.log("Without using sliding window");
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * Complexity
 * Time O(N) | Space O(1)
 * 
 * Runtime: 129 ms, faster than 47.56% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 51.9 MB, less than 37.79% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */
 var maxProfit = function(prices) {
    let left = 0, right = 1, max = 0;

    while(right < prices.length) {
        if(prices[right] <= prices[left]) left = right;

        max = Math.max(max, prices[right] - prices[left]);

        right++;
    }

    return max;
};

console.log("\nUsing sliding window");
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));