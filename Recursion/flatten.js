function flatten(arr) {
    let temp = [];

    function help(input) {
        if (input.length === 0) return
        if (typeof input[0] === 'object') {
            help(input[0]);
        } else {
            temp.push(input[0]);
        }
        help(input.slice(1));
    }
    help(arr);
    return temp;
}
console.log(flatten([1])); // [1]
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]