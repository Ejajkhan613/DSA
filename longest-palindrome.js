// Question
// Given a string s which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.




var longestPalindrome = function (s) {
    let map = new Map();
    let sum = 0;
    for (let a = 0; a < s.length; a++) {
        map.set(s[a], (map.get(s[a]) || 0) + 1);
        if (map.get(s[a]) == 2) {
            sum += 2;
            map.set(s[a], 0);
        }
    }

    let odd = 0;
    for (let [key, val] of map) {
        if (odd > 0) {
            break;
        } else if (val > 0) {
            sum += val;
            odd++;
        }
    }

    return sum;
};

console.log(longestPalindrome("racecar"));