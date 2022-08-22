// Leetcode problem 217 https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Brute force approach.
 * time complexity O(n*n)
 * space complexity O(1)
 */
 var containsDuplicate_1 = function(nums) {
    for(let i = 0 ; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if(nums[j] === nums[i]) 
            return true
        }
    }
    return false
};


const nums = [1,1,1,3,3,4,3,2,4,2]

const nums1 = [1,2,3,4]

const nums2 = [1,2,3,1]

console.log('Brute force approach.');
console.log(`[1,1,1,3,3,4,3,2,4,2]: ${containsDuplicate_1(nums)}`);
console.log(`[1,2,3,4]: ${containsDuplicate_1(nums1)}`);
console.log(`[1,2,3,1]: ${containsDuplicate_1(nums2)}`);




/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Sorted array approach.
 * time complexity O(n log n)
 * space complexity O(1)
 */
 var containsDuplicate_3 = function(nums) {
    nums.sort()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false
};

console.log('Sorted array approach.');
console.log(`[1,1,1,3,3,4,3,2,4,2]: ${containsDuplicate_3(nums)}`);
console.log(`[1,2,3,4]: ${containsDuplicate_3(nums1)}`);
console.log(`[1,2,3,1]: ${containsDuplicate_3(nums2)}`);

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Time Optimized approach.
 * time complexity O(n)
 * space complexity O(n)
 */
 var containsDuplicate_2 = function(nums) {
    const memo = new Set();
    for(let i = 0; i < nums.length; i++){
        if(memo.has(nums[i])){
            return true
        }
        memo.add(nums[i])
    }
    return false
};

console.log('Optimized approach.');
console.log(`[1,1,1,3,3,4,3,2,4,2]: ${containsDuplicate_2(nums)}`);
console.log(`[1,2,3,4]: ${containsDuplicate_2(nums1)}`);
console.log(`[1,2,3,1]: ${containsDuplicate_2(nums2)}`);