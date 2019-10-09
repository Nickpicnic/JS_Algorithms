function capitalizedWords(arr){
    let newArr = [];

    function help(input) {
        if (input.length === 0) return;
        newArr.push(wordCapitalize(input[0]));
        help(input.slice(1));
    }
    function wordCapitalize(str) {
        if (str.length === 1) return str[0].toUpperCase();
        return str[0].toUpperCase().concat(wordCapitalize(str.slice(1)));
    }
help(arr);
return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



// console.log(wordCapitalize('learning')); 

