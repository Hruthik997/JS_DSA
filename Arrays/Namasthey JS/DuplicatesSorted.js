// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.
var removeDuplicates = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }

    return x+1;
};