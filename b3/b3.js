var nums = [3, 5, -1, 1];

function sortAscending(arr) {
    arr.sort((a, b) => a - b);

    var min = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            continue;
        }
        if (arr[i] === min) {
            min++;
        } else if (arr[i] > min) {
            return min;
        }
    }
    return min;
}

var result = sortAscending(nums);
console.log(result);
