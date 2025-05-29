// Question
// Container With Most Water
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.


let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (arr) {
    let i = 0;
    let j = arr.length - 1;

    let max = 0;
    while (i < j) {
        let height = Math.min(arr[i], arr[j]);
        let width = j - i;
        let total = height * width;

        if (max < total) {
            max = total;
        }

        if (arr[i] <= arr[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};

console.log(maxArea(arr));