function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j + 1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // SWAP
        }
    }
    return arr;
}
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));

function bubbleSortOptimized(arr){
    let noSwaps;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // SWAP
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
console.log(bubbleSortOptimized([9, 1, 2, 3, 4, 5, 6, 7, 8]));