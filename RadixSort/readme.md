# Radix Sort

* Intro:
    - Radix sort is a special sorting algorithm that works on lists of numbers
    - It never makes comparisons between elements!
    - It exploits the fact that information about the size of a number is encoded in the number of digits.
    - More digits means a bigger number!

* *Implementation in redixSort.js*
    - In order to implement radix sort, it's helpful to build a fex helper functions first:
        - *getDigit(num, place)* - returns the digit in *num* at the given *place* value
        - *digitCount(num)* - return the number of digits in the num
        - *mostDigits(nums* - return the length of the longest num of array 

* Radix Sort **Big O Complection:**
    
    Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity
    :--                   | :--:                      | :--:                    | :--:
    O(*nk*)               | O(*nk*)                   | O(*nk*)                 | O(*n + k*)

    - *n - length of array*
    - *k - number of digits (average)*