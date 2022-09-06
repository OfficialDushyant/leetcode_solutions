console.log('\nSimple JS Solution');
/**
 * @param {string} s
 * @return {boolean}
 * 
 * Simple JS solution
 * 
 * Complexity
 * Time O(N) | Space O(1)
 * 
 * Runtime: 86 ms, faster than 82.95% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 45.8 MB, less than 52.51% of JavaScript online submissions for Valid Palindrome.
 */
 var isPalindrome = function(s) {
    if (!s.length) return true;
    s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase() // Remove char except alpha numeric
    return s === s.split("").reverse().join("");
};


console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));


console.log('\nSolving with two pointer');
/**
 * @param {string} s
 * @return {boolean}
 * 
 * Solving with two pointer
 * 
 * Complexity
 * 
 * Time O(N) | Space O(1)
 * 
 * Runtime: 60 ms, faster than 99.75% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 44.3 MB, less than 83.18% of JavaScript online submissions for Valid Palindrome.
 * 
 */
 var isPalindrome = function(s) {
    if (!s.length) return true;
    s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase() // Remove char except alpha numeric
    let left = 0 , right = s.length - 1
    while (left < right) {
        if(s[left] === s[right]){
            left++; 
            right--;
        }
        else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));