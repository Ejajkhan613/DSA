// Question
// Units Consumed
// Electricity consumption is measured via slab rates for a particular watt
// age capacity, which is as follows
// Units Consumed       Per Unit Price (in Rupees/unit)
// o - 50               3
// 51 - 150             5
// 150 and above        10

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to eve
// ry bill.
// You are given total amount of bill, N , you need to find total unit consu
// med.



function unitsConsumed(n) {
    n = n - 80;

    let units = 0;

    if (n <= 0) {
        console.log(0);
        return;
    }

    if (n <= 150) {
        units = n / 3;
    } else if (n <= 650) {
        units = 50 + ((n - 150) / 5);
    } else {
        units = 150 + ((n - 650) / 10);
    }

    console.log(Math.floor(units));
}