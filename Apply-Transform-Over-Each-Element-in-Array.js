// Question
// Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.



var map = function(arr, fn) {

    for(let a=0; a<arr.length; a++){
        arr[a] = fn(arr[a], a);
    }
    return arr;
};