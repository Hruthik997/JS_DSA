// https://leetcode.com/problems/single-number/description/

var singleNumber = function(nums) {
    let xor = 0;
    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};

// a XOR a = 0
// a XOR 0 = a
// a XOR b XOR b XOR c XOR a = c