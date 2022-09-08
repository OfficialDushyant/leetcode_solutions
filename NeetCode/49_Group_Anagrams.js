/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Complexity
 * Time: O(N * N)
 * 
 * Runtime: 182 ms, faster than 68.49% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 52.5 MB, less than 84.77% of JavaScript online submissions for Group Anagrams.
 */
var groupAnagrams = function (strs) {
    const result = [];
    const map = new Map();
    for(let i =0; i < strs.length; i++){
        const sorted = [...strs[i]].sort().join('');
        if(map.has(sorted)) {
            map.get(sorted).push(strs[i])
        }
        else {
            map.set(sorted, [strs[i]])
        }
    }
    for(const value of map.values()){
        result.push(value);
    }
    return result;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
