// given 2 integers
// do they have the same frequency of digits?
function sameFrequency(num1, num2){
    // convert them into strings
    let str1 = String(num1);
    let str2 = String(num2);

    if (str1.length !== str2.length) {
        return false
    }
    
    // make a map from first string
    let frequency = {};
    for (let char of str1) {
        frequency[char] = ++frequency[char] || 1;
    }

    // compare str2 with object
    for (let char of str2) {
        if (frequency[char] > 0) {
            frequency[char]--;
        } else {
            return false
        }
    }
    return true
}

console.log(sameFrequency(12345, 54321));