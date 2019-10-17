function merge(arr1, arr2) {
    let newArr = [];
    let pointer1 = 0,
        pointer2 = 0;

    while(pointer1 < arr1.length && pointer2 < arr2.length){
        if(arr1[pointer1] < arr2[pointer2]){
            newArr.push(arr1[pointer1]);
            pointer1++;
        }else{
            newArr.push(arr2[pointer2]);
            pointer2++;
        }
    }
    while(pointer2 < arr2.length){
        newArr.push(arr2[pointer2]);
        pointer2++;
    }
    while(pointer1 < arr1.length){
        newArr.push(arr1[pointer1]);
        pointer1++;
    }
    return newArr
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let someArr = [];
for (let i = 0; i < 10; i++) {
    someArr.push(Math.floor(Math.random() * 100));
}
console.log(someArr);
console.log(mergeSort(someArr));