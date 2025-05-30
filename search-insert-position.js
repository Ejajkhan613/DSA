// Question
// Search Insert Position
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    let l = nums.length;
    for (let a = 0; a < l; a++) {
        if (nums[a] == target) {
            return a;
        } else if (nums[a] > target) {
            return a;
        }
    }
    return l;
};