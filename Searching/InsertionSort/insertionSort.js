function insertionSort(arr){
    let j = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            j = i;
            while(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                j--;
            }
        }
    }
    return arr;
}

console.log(insertionSort([11, 8, 6, 7, 6, 5, 4, 3, 2, 1]));