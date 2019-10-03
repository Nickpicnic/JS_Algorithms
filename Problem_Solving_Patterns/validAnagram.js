function validAnagram(str1, str2){
// compares 2 string and return true if anagrams
    // compares length
    if (str1.length === str2.length) {
        // makes frequency object
        let frequency1 = {};
        for (let char of str1) {
            frequency1[char] = ++frequency1[char] || 1;
        }
        // compares
        for (let char of str2) {
            if (!(frequency1[char])){
                return false
            } else {
                frequency1[char]--;
            }
        }
        return true
    }
    return false
}

// console.log(validAnagram("ollhh", "hello"));