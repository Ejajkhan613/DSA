// Question
// Sort the trucks using second lane
// If possible then return true
// else return false

let trucks = [3, 9, 4, 8, 5, 7, 6];


function sortTrucks(arr) {
    let min = Math.min(...arr);

    let stack = [];
    for (let a = 0; a < trucks.length; a++) {
        if (arr[a] == min) {
            min++;
        } else {
            while (stack.length && stack[stack.length - 1] == min) {
                if (stack[stack.length - 1] == arr[min]) {
                    min++;
                    stack.pop();
                }
            }
            stack.push(arr[a]);
        }
    }
    console.log(stack)

    for (let a = stack.length - 1; a >= 0; a--) {
        if (min == stack[a]) {
            min++;
            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length) {
        return false;
    } else {
        return true;
    }

}

console.log(sortTrucks(trucks));