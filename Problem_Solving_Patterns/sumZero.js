// accepts a sorted array of integers
// should find the FIRST pair where the sum is 0
// return an array that includes both values that sum to zero or UNDEFINED if does not exist

function sumZero(arr) {
    // create two pointers
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));