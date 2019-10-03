function findLongestSubstring(str){
    let min = 0,
        max = 0,
        substring = str[max],
        len = 0,
        currentLen = 1;

        if (str.length) {
            while (max < str.length) {
                if (substring.length === (new Set(substring).length)) {
                    max++;
                    substring += str[max];
                    currentLen++;
                    if (currentLen > len) {
                        len = currentLen;
                    }
                    console.log(substring);
                } else {
                    substring = substring.slice(1);
                    currentLen--;
                    min++;
                }
            }
            return len
        }
        return 0
}
  
findLongestSubstring('');   // 0
findLongestSubstring('rithmschool');   // 7