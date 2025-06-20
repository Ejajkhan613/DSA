// Question
// Single Number
// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
    let val = 0;
    let len = nums.length;
    for (let a = 0; a < len; a++) {
        val ^= nums[a];
    }
    return val;
};