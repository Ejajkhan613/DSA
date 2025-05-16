// Question
// You are playing the famous Maze Runner Arcade Game.
// The game contains a maze which has values{'L', 'D'),
// where L -> indicates that you move left,
// R indicates that you move right,
// U -> indicates that you move up,
// while D -s indicates that you move down.
// The score is calculates as the number of moves in which you exit the grid. 
// It you cannot exit the grid, that means your
// scoreshould be returned as O. Given a square matrix, denoting the maze,
// write a program to calculate the score.
// Note: You will always enter that the maze through the position (0.0).


let N = 3;

let matrix = [
    ["L", "R", "L"],
    ["U", "U", "U"],
    ["D", "L", "R"]
]



function exitGrid(N, matrix) {
    let a = 0;
    let b = 0;
    let count = 0;
    let flag = true;
    while (flag) {
        if (matrix[a][b] == 0) {
            count = 0;
            flag = false;
        } else if (matrix[a][b] == undefined) {
            flag = false;
        } else if (matrix[a][b] == "U") {
            count++;
            matrix[a][b] = 0;
            a = a - 1;
        } else if (matrix[a][b] == "D") {
            count++;
            matrix[a][b] = 0;
            a = a + 1;
        } else if (matrix[a][b] == "L") {
            count++;
            matrix[a][b] = 0;
            b = b + 1;
        } else {
            count++;
            matrix[a][b] = 0;
            b = b - 1;
        }
    }
    console.log(count);
}

exitGrid(N, matrix);