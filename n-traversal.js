let N = 4;

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]



function nTraversal(N, matrix) {
    let str = "";

    let i = N - 1;
    let j = 0;

    while (i >= 0) {
        str += matrix[i][j] + " ";
        i--;
    }

    i = 1;
    j = 1;

    while (i < N) {
        str += matrix[i][j] + " ";
        i++;
        j++;
    }

    i = N - 2;
    j = N - 1;

    while (i >= 0) {
        str += matrix[i][j] + " ";
        i--;
    }

    console.log(str);
}

nTraversal(N, matrix);