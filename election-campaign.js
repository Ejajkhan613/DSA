// Question
// Elections are close and you are a party worker of a political party and you have been assigned a task.
// The task is it to put up a poster on the side of a highway.
// There are n poles and you have to choose any two poles to put up the poster.
// Say you choose two poles of height h1 and h2 then the poster will be put up of height which is minimum of the two.
// And the width would be the distance between them. You have to put up the poster of maximum area to make your boss happy.
// What is the maximum area of the poster you can fit using the given poles. The n consecutive poles are separated by a unit distance.



function election(arr) {
    let i = 0;
    let j = arr.length - 1;

    let max = 0;
    while (i < j) {
        let height = Math.min(arr[i], arr[j]);
        let width = j - i;
        let total = height * width;

        if (max < total) {
            max = total;
        }

        if (arr[i] <= arr[j]) {
            i++;
        } else {
            j--;
        }
    }
    console.log(max);
}

election([2, 4, 6, 9, 3, 7]);