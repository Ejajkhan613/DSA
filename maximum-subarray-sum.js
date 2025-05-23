// Question
// Find maximum sum of subarray



// Kadane's Algorithm
let arr = [2, 5, 0, -3, -6, 2];
let n = 6;

let sum = 0;
let max = -Infinity;
for (let a = 0; a < n; a++) {
    sum += arr[a];
    if (sum > max) {
        max = sum;
    }

    if (sum < 0) {
        sum = 0;
    }
}

console.log(max);