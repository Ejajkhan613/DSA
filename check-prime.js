// Question
// You are given a number stored in a variable with the name num
// Check if the number is a prime number or not
// If the value stored in num , is a prime number print "Yes" , else print "No"


let num = 13;

function checkPrime(num) {
    if (num <= 1) {
        console.log("No");
        return;
    }

    for (let a = 2; a < num; a++) {
        if (num % a == 0) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}

checkPrime(num);