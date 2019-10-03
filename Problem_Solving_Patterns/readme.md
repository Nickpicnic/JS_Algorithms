# Problem Solving Patterns
* Some Patterns:
    - Frequency Counter
    - Multiple Pointers
    - Sliding Window
    - Divide and Conquer
    - Dynamic Programming
    - Greedy Algorythms
    - Backtracking
    - etc.

    * **Frequency Counters**
        *(this pattern uses objects or sets to collect values / frequencies of values)*
        *(this can ofthen avoid the need for nested loops or **O(N<sup>2</sup>)** operations with arrays / strings)*
        
        - Example1:
            - same([1, 2, 3], [4, 1, 9]) //true
            - same([1, 2, 3], [1, 9]) //false
            - same([1, 2, 1], [4, 4, 1]) //false *(must be same frequency)*
                - **naive** solution - time complexity - **N<sup>2</sup>** *(naiveFrequency.js)*
                - **refactored** solution - time comp. - **O(N)** *(refactoredFrequency.js)*

        - Example2 *(anagrams)*:
            *(validAnagram.js)*
            - validAnagrams(" ", " ") //true
            - validAnagrams("aaz", "zza") //false
            - validAnagrams("anagram", "nagaram") //true
            - validAnagrams("car", "rat") //false

    * **Multiple Pointers** 
        *(creating **pointers** or **values** that corresponds to an index or position and move towards the beginning, end or middle based on a certain condition)*
        *(**Very** efficient for solving problems with minimal space complexity as well)*
       
        - Example1:
            *(sumZero.js):*
            - sumZero([-3, -2, -1, 0, 1, 2, 3]) *// [-3, 3]*
            - sumZero([-2, 0, 1, 3]) *// undefined*
            - sumZero([1, 2, 3]) *// undefined*
                - time complexity  - **O(N)**
                - space complexity - **O(1)**

        - Example2: 
            *(countUniqueValues.js)*
            - countUniqueValues([1, 1, 1, 1, 1, 1, 2]) *// 2*
            - countUniqueValues([1, 2, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13]) *// 7*
            - countUniqueValues([]) *// 0*
            - countUniqueValues([-2, -1, -1, 0, 1]) *// 4*

    * **Sliding Window**
        *(this pattern involves creating a **window** which can either be an array or number from one position to another)*
        *(depending on a certain condition, the window either increases or closes (and new window is created))*
        *(very useful for keeping track of a subset of data in an array / string etc.)*
        
        - Example1: 
            *(maxSubarraySum.js)*
            - maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) *// 10*
            - maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) *// 17*
            - maxSubarraySum([4, 2, 1, 6], 1) *// 6*            
            - maxSubarraySum([4, 2, 1, 6, 2], 4) *// 13*            
            - maxSubarraySum([], 4) *// null*      
                - Time complexity - **O(N)**

    * **Divide and Conquer**
        *(this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data)*
        *(this pattern can tremendously **decrease time complexity**)*      
        
        - Example1: 
            *(search.js)*
            - search([1, 2, 3, 4, 5, 6], 4) *//3*
            - search([1, 2, 3, 4, 5, 6], 6) *//5*
            - search([1, 2, 3, 4, 5, 6], 11) *//-1*
                - Time complexity - **O(log N)**

* *Exercises:*
    - *sameFrequency.js*
    - *areThereDuplicates.js*
    - *averagePair.js*
    - *isSubsequence.js*
    - *maxSubarraySum2.js*
    - *minSubArrayLen2.js*
    - *findLongestSubstring.js*
