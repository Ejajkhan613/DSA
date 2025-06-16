// Question
// Fizz Buzz

// You are given a number stored in a variable with the name
// For all numbers in the range
// [1 num], including num
// 1. If the number is divisible by 3 and 5 both, print "FizzBuzz"
// 2. Else If the number is divisible by 3, print "Fizz"
// 3. Else If the number is divisible by 5, print "Buzz"
// 4. Else, print the number as it is


function fizzbuzz(input) {
    for (let a = 1; a <= input; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz");
        } else if (a % 3 == 0) {
            console.log("Fizz");
        } else if (a % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(a);
        }
    }
}

fizzbuzz(3);