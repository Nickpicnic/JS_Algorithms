// take in two strings as arguments
// if 1 is Subsequence of 2 - return true, otherwise - false
function isSubsequence(str1, str2) {
    let firstIndex = 0;
    for (let i = 0; i < str2.length; i++){
        if (str2[i] === str1[firstIndex]) {
            firstIndex++;
        }
    }
    if (firstIndex === str1.length){
        return true
    }
    return false
}

console.log(isSubsequence("isng", "asting"));  // true
