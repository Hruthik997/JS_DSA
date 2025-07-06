// https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            max = Math.max(count, max);
            count = 0;
        }


    }
    return Math.max(count, max);
};


// https://leetcode.com/problems/missing-number/description/

var missingNumber = function(nums) {
    let len = nums.length;
    let sum = (len * (len + 1)) / 2;
    let arraySum = nums.reduce((accumulator, current) => accumulator + current,0);
    return sum - arraySum;
};