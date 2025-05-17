// Question
// The transpose of a matrix is an operator which flips a matrix over its diagonal,
// that is it switches the row and column of the matrix by producing another matrix.
// See sample test case for better understanding
// So, given an array of n rows and m columns, generate the transpose of the matrix.


let N = 4;
let M = 5;

let matrix = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4]
]



function transpose(N, M, matrix) {
    let mat = [];

    for (let a = 0; a < N; a++) {
        let arr = [];
        for (let b = 0; b < M; b++) {
            arr.push(matrix[b][a]);
        }
        mat.push(arr);
    }
    console.log(mat);
}

transpose(N, M, matrix);