/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Initial approach.
 * 
 * complexity
 * Time  O(2n)
 * Space O(n)
 * 
 * Runtime: 166 ms, faster than 16.62% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 50.5 MB, less than 5.08% of JavaScript online submissions for Valid Anagram.
 */
 var isAnagram1 = function(s, t) {
    if(s.length !== t.length) return false;
   const map = new Map();
   for (let i in s){
    if(map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1)
    }
    else {
        map.set(s[i], 1)
    }
   }
   for(let i in t){
    if (map.has(t[i]) && map.get(t[i]) > 0){
        map.set(t[i], map.get(t[i]) - 1)
    }
    else {
        return false
    }
   }
   return true
};

console.log('Brute force approach.');
console.log(isAnagram1("anagram", "nagaram"));
console.log(isAnagram1("rat", "car"));
console.log(isAnagram1("rac", "car"));
console.log(isAnagram1("aacc", "ccac"));
console.log(isAnagram1("ab", "a"));


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Neetcode brute force approach. with two object mapping
 * 
 * complexity
 * Time  O(2n)
 * Space O(2n)
 * 
 * Runtime: 146 ms, faster than 29.80% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 50 MB, less than 5.51% of JavaScript online submissions for Valid Anagram.
 */
var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false;
    const mapS = {}, mapT = {};
    for(const i in s){
        mapS[s[i]] ? mapS[s[i]] += 1 : mapS[s[i]]= 1;
        mapT[t[i]] ? mapT[t[i]] += 1 : mapT[t[i]]= 1;
    }
    for(const i in mapS){
        if (mapS[i] !== mapT[i]) return false;    
    }
    return true;
};

console.log('Neetcode approach.');
console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("rat", "car"));
console.log(isAnagram2("rac", "car"));
console.log(isAnagram2("aacc", "ccac"));
console.log(isAnagram2("ab", "a"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Reducing space complexity by sorting the string.
 * Sorting adds more time complexity
 * 
 * complexity
 * Time  O()
 * Space O()
 * 
 * Runtime: 158 ms, faster than 21.14% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 48 MB, less than 27.10% of JavaScript online submissions for Valid Anagram.
 */
 var isAnagram3 = function(s, t) {
    if(s.length !== t.length) return false;
    s = [...s].sort().join();
    t = [...t].sort().join();
    return s === t
};

console.log('Sorted string match approach.');
console.log(isAnagram3("anagram", "nagaram"));
console.log(isAnagram3("rat", "car"));
console.log(isAnagram3("rac", "car"));
console.log(isAnagram3("aacc", "ccac"));
console.log(isAnagram3("ab", "a"));