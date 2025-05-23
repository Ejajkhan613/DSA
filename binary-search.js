let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let N = 10;
let k = 6;

function binarySearch(arr, N, k) {
    let left = 0;
    let right = N - 1;
    let mid = Math.floor((N - 1) / 2);

    while (left <= right) {
        console.log("left -", left, "arr-left -", arr[left], "mid -", mid, "arr-mid -", arr[mid], "right -", right, "arr-right -", arr[right]);
        if (arr[mid] == k) {
            console.log("Found", mid);
            return;
        } else if (arr[mid] > k) {
            right = Math.floor(mid - 1);
        } else {
            left = Math.floor(mid + 1);
        }
        mid = Math.floor((left + right) / 2);
    }
    console.log("Not Found", -1);
}

binarySearch(arr, N, k);