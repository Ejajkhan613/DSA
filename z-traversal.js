// Question
// Given a square matrix of size N x N. Print the Z traversal of the matrix.
// (Traverse the matrix in Z patter)
// Refer the figure given below for better understanding.


let N = 4;

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]



function zTraversal(N, matrix) {
    let str = "";

    let i = 0;
    let j = 0;

    while(j < N){
        str += matrix[i][j] + " ";
        j++;
    }

    i = 1;
    j = N-2;
    while(i < N){
        str += matrix[i][j] + " ";
        i++;
        j--;
    }

    i = N-1;
    j = 1;
    while(j < N){
        str += matrix[i][j] + " ";
        j++;
    }

    console.log(str);
}

zTraversal(N, matrix);