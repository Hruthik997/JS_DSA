// https://leetcode.com/problems/reverse-string/description/

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
    let l = s.length;
    let halfLen = Math.floor(l / 2);
    for(let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[l - (i + 1)];
        s[l - (i + 1)] = temp;
    }
};