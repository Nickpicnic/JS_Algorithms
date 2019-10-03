function averagePair(arr, num){
    let min = 0,
        average = 0,
        max = arr.length - 1;

    if (arr.length){
        while (min < max) {
            average = (arr[min] + arr[max]) / 2;
            if (average == num){
                return true
            } else if(average < num) {
                ++min;
            } else {
                --max;
            }
        }
    }
    return false
}

// console.log(averagePair([1, 2, 3, 4, 5, 6], 4));