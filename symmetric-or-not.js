// Question
// You are given some matrices consist of only O 's and I's and
// you haveto pick which are symmetric and which are not
// A matrix iS said to be symmetric about X- axis if Ist row is identical to n-th row,
// 2nd is identical to (n-1)tn row and so on.
// A matrix is said to be symmetric about Y- axis if 1st column is identical
// to the nth column, 2nd identical to (n-1 )th and so on for all columns.
// Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"



let N = 5;

let matrix = [
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0]
]



function symmetric(N, matrix) {
    let transposed = [];

    for (let a = 0; a < N; a++) {
        let arr = [];
        let p1 = 0;
        let p2 = N - 1;
        for (let b = 0; b < N; b++) {
            if (matrix[a][p1] !== matrix[a][p2]) {
                console.log("NO");
                return;
            }
            p1++;
            p2--;
            arr.push(matrix[b][a]);
        }
        transposed.push(arr);
    }

    for (let a = 0; a < N; a++) {
        let p1 = 0;
        let p2 = N - 1;
        for (let b = 0; b < N; b++) {
            if (transposed[a][p1] !== transposed[a][p2]) {
                console.log("NO");
                return;
            }
            p1++;
            p2--;
        }
    }
    console.log("YES");
}

symmetric(N, matrix);