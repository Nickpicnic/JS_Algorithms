function capitalizeFirst(arr){
    let newArr = [];

    function help(input) {
        if (input.length === 0) return;
        newArr.push(input[0][0].toUpperCase().concat(input[0].slice(1)));
        help(input.slice(1));
    }
help(arr);
return newArr;
}
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']