function selectionSort(arr) {
    let currentMin = 0;
    for(let i = 0; i < (arr.length - 1); i++){
        currentMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[currentMin]){
                currentMin = j;
            }
        }
        if(arr[currentMin] < arr[i]){
            [arr[currentMin], arr[i]] = [arr[i], arr[currentMin]];
        }
    }
return arr;
}

console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(selectionSort([4, 6, 5, 7, 3, 9, 2, 5, 1]));