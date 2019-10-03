function countUniqueValues(arr) {
    let first = 0;
    if (arr.length) {
        for (let second = 1; second < arr.length; second++) {
            if (arr[first] !== arr[second]) {
                first++;
                arr[first] = arr[second];
            } 
        }
        first++;
    }
    return first;
}

function countUniqueValues2(arr) {
    let counter = 0;
    if (arr.length) {
        counter++;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== arr[i + 1]) {
                counter++;
            }
        }
    }
    return counter
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1])); // 1
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4