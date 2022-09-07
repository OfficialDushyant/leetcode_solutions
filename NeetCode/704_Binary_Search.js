/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * complexity
 * time O(log N) | space O(1)
 * Runtime: 103 ms, faster than 39.10% of JavaScript online submissions for Binary Search.
 * Memory Usage: 45.3 MB, less than 32.49% of JavaScript online submissions for Binary Search.
 */
var search = function(nums, target) {
    let left = 0 , right = nums.length - 1;

    while (left <= right){
        const midpoint = Math.floor((left + right) / 2);
        if(nums[midpoint] === target) return midpoint;
        if(nums[midpoint] < target) left = midpoint + 1;
        if(target < nums[midpoint] ) right = midpoint - 1;
    }

    return -1;
};


console.log(search([-1,0,3,5,9,12], 9)); //4
console.log(search([-1,0,3,5,9,12], 2)); //-1
console.log(search([5], 5)); //0
console.log(search([2,5], 5)); //1
