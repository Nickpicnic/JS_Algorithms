# Recursion

* How recursive functions work?
    - Invoke the **same** function with a different input until you reach your base case!

* **Base Case**
    - The condition wher recursion ends *(most important)*

* Two essential parts of a recursive function!
    - Base case
    - Different Input

* **Common Recursion Pitfalls**
    - No base case *(or it is wrong)*
    - Forgetting to return or returning the wrong thing!
    - Stack overflow!

* **Helper Method Recursion**
    - *(outer.js)*
    - *(collectOddValues.js)*

* **Pure Recursion**
    *(collectOddValues2.js)*
    - Tips:
        - For arrays use methods like **slice**, **the spread operator**, and **concat** that make copies of arrays so yo do not mutate them!
        - Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make copies of strings.
        - To make copies of objects use **Object.assign**, or **the spread operator**

* Exercises 1:
    - *product.js*
    - *factorial.js*
    - *productOfArray.js*
    - *recursiveRange.js*
    - *fib.js*

* Exercises 2:
    - *reverse.js*
    - *isPalindrome.js*
    - *someRecursive.js*
