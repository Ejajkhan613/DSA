// Question
// Three Consecutive Odds

// Given an integer array arr,
// return true if there are three consecutive odd numbers in the array. Otherwise, return false.


var threeConsecutiveOdds = function (arr) {

    let a = 0;
    let b = 1;
    let c = 2;
    while (a < arr.length - 1) {
        if (arr[a] % 2 == 1 && arr[b] % 2 == 1 && arr[c] % 2 == 1) {
            return true;
        } else {
            a++;
            b++;
            c++;
        }
    }
    return false;

};