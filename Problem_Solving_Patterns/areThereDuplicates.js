function areThereDuplicates() {
    let frequency = {};
    for (let i = 0; i < arguments.length; i++) {
        if (!(frequency[arguments[i]])) {
            frequency[arguments[i]] = 1;
        } else {
            return true
        }
    }
    return false
}

// console.log(areThereDuplicates('a', 'b', 'a'));