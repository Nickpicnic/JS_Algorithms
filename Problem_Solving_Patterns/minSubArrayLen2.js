function minSubArrayLen(arr, num){
    let tempSum = arr[0], 
        min = 0,
        minLen = 0,
        index = 0;
    while (tempSum < num) {
        if (index === arr.length - 1) {
            return 0
        }
        index++;
        tempSum += arr[index];
    }
    minLen = index + 1 - min;
    // console.log(min, index, tempSum, minLen);
    while (index < arr.length) {
        if (tempSum > num) {
            tempSum -= arr[min];
            min++;
            if (tempSum >= num) {
                minLen--;
            }
        // console.log(min, index, tempSum, minLen);
        } else if (tempSum === num) {
            index++;
            tempSum += arr[index] - arr[min];
            min++;
        } else {
            index++;
            tempSum += arr[index];
            // console.log(min, index, tempSum, minLen);
        }
    }
    return minLen
}

console.log(minSubArrayLen([2, 3, 1, 4, 3, 2], 7));     // 2 -> [4, 3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));     // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));     // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));     // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));     // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));     // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));     // 0


