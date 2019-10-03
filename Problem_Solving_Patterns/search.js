function search(arr, num) {
    let min = 0, 
        middle = 0,
        max = arr.length - 1;

    while (min <= max) {
        middle = Math.floor((max + min) / 2);
        if (arr[middle] === num) {
            return middle
        } else if (arr[middle] < num) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }
    return -1
}

// console.log(search([1, 2, 3, 4, 5, 6], 11));