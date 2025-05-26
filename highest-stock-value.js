// Question
// Highest Stock Value
// Chunnu wants to become a trader. He wants your help to find the highest
// value of the stock in one day. The value of the stock changes n times
// throughout the day. When the day started the value of the stock was 0.
// You are given an integer array arr of length n where arr[i] is the net
// change in the value of the stock between points i and i + 1 for all 
// ( 0 <= i < n ). Print the highest value of the stock during the day.
// Note: Stock Prices can also be in Negative

let stocks = [1, -3, 4, 3, -2];

function stockValue(stocks) {
    let max = 0;
    let total = 0;
    let length = stocks.length;

    let i = 0;
    while (i < length) {
        total += stocks[i];
        if (max < total) {
            max = total;
        }
        i++;
    }
    console.log(max);
}

stockValue(stocks);