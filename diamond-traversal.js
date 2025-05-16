// Question
// Given a square matrix of odd length. Print the diamond traversal of the matrix.
// (Traverse the matrix in diamond patter)
// Refer the figure given below for better understanding.


let N = 9;

let matrix = [
    [1,   2,  3,  4,  5,  6,  7,  8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 58, 59, 60, 61, 62, 63],
    [64, 65, 66, 67, 68, 69, 70, 71, 72],
    [73, 74, 75, 76, 77, 78, 79, 80, 81],
];



function diamondTraversal(N, matrix) {
    let str = "";

    let i = (N - 1) / 2;
    let j = N - 1;

    while (i >= 0) {
        str += matrix[i][j] + " ";
        i--;
        j--;
    }

    i = 1;
    j = ((N - 1) / 2) - 1;
    while (j >= 0) {
        str += matrix[i][j] + " ";
        i++;
        j--;
    }

    i = ((N - 1) / 2) + 1;
    j = 1;
    while (i < N) {
        str += matrix[i][j] + " ";
        i++;
        j++;
    }

    i = N - 2;
    j = ((N - 1) / 2) + 1;
    while (j < N - 1) {
        str += matrix[i][j] + " ";
        i--;
        j++;
    }



    console.log(str);
}

diamondTraversal(N, matrix);