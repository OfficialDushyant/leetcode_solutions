/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = [];
    const map = new Map();
    for(let i =0; i < strs.length; i++){
        const sorted = [...strs[i]].sort().join('');
        if(map.has(sorted)) {
            const mapValue = map.get(sorted).push(strs[i])
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
