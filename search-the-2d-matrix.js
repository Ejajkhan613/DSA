// Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.




// I tried some weard approach just to find if it can work,
// I first find which row may contain the value
// then saving that row
// then looping in that row
// I can also use binary search in that found row
var searchMatrix = function (matrix, target) {
    let row = undefined;
    for (let a = matrix.length - 1; a >= 0; a--) {
        if (matrix[a][0] == target) {
            return true;
        } else if (matrix[a][0] > target) {
            continue;
        } else {
            row = a;
            break;
        }
    }
    if (row !== undefined) {
        console.log(matrix[row])

        for (let a = 0; a < matrix[row].length; a++) {
            if (matrix[row][a] == target) {
                return true;
            }
        }
    }

    return false;
};