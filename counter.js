// Question
// Counter

// Given an integer n, return a counter function. This counter function initially
// returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


var createCounter = function (n) {
    let counter = 0;
    return () => {
        let val = n + counter;
        counter++;
        return val;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */