function isPalindrome(str){
    let newStr = "";

    function inner(input) {
        if (input.length === 1) return input[0];
        newStr = input[input.length - 1].concat(inner(input.slice(0, input.length - 1)));
        return newStr;
    }
    inner(str);
    if (str === newStr) {
        return true
    }
    return false
}

console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false