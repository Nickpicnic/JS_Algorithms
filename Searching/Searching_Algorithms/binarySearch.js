function binarySearch(arr, search){
    let min = 0,
        max = arr.length - 1,
        middle = Math.floor((min + max) / 2);

        while(arr[middle] !== search && min <= max){
            if(search < arr[middle]) max = middle - 1;
            else min = middle + 1;
            middle = Math.floor((min + max) / 2);
        }
        return arr[middle] === search ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));