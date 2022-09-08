/**
 * @param {string} s
 * @return {number}
 * 
 * complexity
 * 
 * Time O(N) | Space O(1)
 * 
 * Runtime: 189 ms, faster than 35.74% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 50.8 MB, less than 14.24% of JavaScript online submissions for Longest Substring Without Repeating Characters
 */
 var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let max = 0;
    for(right in s){
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]); 
        max = Math.max(max, set.size)   
    }
    return max
};

console.log(lengthOfLongestSubstring('abcabcbb'));