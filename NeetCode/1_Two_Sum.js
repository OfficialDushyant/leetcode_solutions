/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * time complexity O(n)
 * space complexity O(n)
 * 
 * Runtime: 80 ms, faster than 88.31% of JavaScript online submissions for Two Sum.
 * Memory Usage: 44.4 MB, less than 14.83% of JavaScript online submissions for Two Sum.
 */
 var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in map) return [map[nums[i]], i];
        map[target - nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([7,2,13,11,8], 24));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([0,4,3,0], 0));
console.log(twoSum([-3,4,3,90],0));
console.log(twoSum([-1,-2,-3,-4,-5], -8));
