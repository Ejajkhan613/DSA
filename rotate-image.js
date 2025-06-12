const matrix = [[1,2,3],[4,5,6],[7,8,9]];

function rotate(matrix){
    for(let a=0; a<matrix.length; a++){
        let arr = [];
        for(let b=matrix.length-1; b>=0; b--){
            arr.push(matrix[b][a])
        }
        console.log(arr);
    };
}

rotate(matrix);