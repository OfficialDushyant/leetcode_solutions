/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Runtime: 145 ms, faster than 25.06% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 48.8 MB, less than 19.59% of JavaScript online submissions for Top K Frequent Elements.
 * 
 * Time complexity O(N*M) | M = k
 * Space complexity O(N*M)
 */
 var topKFrequent = function(nums, k) {
    const map = new Map();

    // Store frequency of number in a map
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        map.set(nums[i], map.has(nums[i])? map.get(nums[i]) + 1 : 1)
    }
    const result = [];

    while(result.length <= k - 1){
        let maxCount = 0;
        let highKey = null;
        for (const [key, value] of map) {
            if(maxCount < value) {
                maxCount = value
                highKey = key
            }
        }
        map.delete(highKey);
        result.push(highKey);
    }
    return result
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1,2], 2));

//Solving with Bucket sort
console.log("\nBucket sort solution");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function (nums, k) {
    const map = {};
    const result = [];
    const bucket = Array.from({length: nums.length + 1}, () => []); // Array of arrays
    
    
    // storing frequency of numbers in a map
   for(const n of nums){
    map[n] = (n in map) ? map[n] + 1 : 1
   }
    // Populate the bucket with numbers in frequency
    // as the index of the bucket
   for(const c in map) {
    bucket[map[c]].push(c);
   }
   for(let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i].length > 0) {
        bucket[i].forEach((elem)=> result.push(elem));
        if(k == result.length){
            return result;
        }
    }
   }

 }

 console.log(topKFrequent([1,1,1,2,2,3], 2));
 console.log(topKFrequent([1,2], 2));