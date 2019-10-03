function findLongestSubstring(str){
    let max = 0,
        substring = str[max],
        len = 0,
        currentLen = 1;

        if (str.length) {
            while (max < str.length) {
                if (substring.length === (new Set(substring).size)) {
                    max++;
                    substring += str[max];
                    currentLen++;
                    if (currentLen > len) {
                        len = currentLen;
                    }
                    // console.log(substring);
                } else {
                    substring = substring.slice(1);
                    currentLen--;
                    // console.log(substring);
                }
            }
            return len - 1
        }
        return 0
}
  
console.log(findLongestSubstring(''));   // 0
console.log(findLongestSubstring('rithmschool'));   // 7
console.log(findLongestSubstring('thisisawesome'));   // 6
console.log(findLongestSubstring('thecatinthehat'));   // 7
console.log(findLongestSubstring('bbbbbbbb'));   // 1
console.log(findLongestSubstring('longestsubstring'));   // 8
console.log(findLongestSubstring('thisishowwedoit'));   // 6
