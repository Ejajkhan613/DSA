// Question
// Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
    let map = new Map();

    let output = [];

    for (let a = 0; a < nums.length; a++) {
        let x = target - nums[a];

        if (map.has(x)) {
            output = [a, map.get(x)];
            break;
        } else {
            map.set(nums[a], a);
        }
    }
    return output;
};