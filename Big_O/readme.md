# Big O Notation
* How much simple operations?
    * Counting Operations (add.js):
        - <return n * (n + 1) / 2>
            - **3** simple operations, regardless of the size of **n**:
                - **1** multiplication
                - **1** addition
                - **1** division

        - in case with for-loop:
            - **5n +  2** simple operations!:
                - **1** assignment (at the SUM variable)
                - **1** assignment (i-variavle in the iterator)
                - **n** additions (i++ in iterator)
                - **n** assignments (i++ in iterator)
                - **n** comparisons (in iterator)
                - **n** additions 
                - **n** assignments
            -  but regardless of the exact number, the number of operations grows roughly **proportionally with n**


* Big O Definition
    - We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.
        - **f(n)** could be linear **(f(n) = n)**
        - **f(n)** could be quadratic **(f(n) = n<sup>2</sup>)**
        - **f(n)** could be constant **(f(n) = 1)**
        - **f(n)** could be something entirely different!
    - Big O - is the **worst** case scenario!

    - Example (add.js): 
        - <return n * (n + 1) / 2> Always 3 operations - **O(1)** 
        - for-loop example - Num of operations is bounded by a multiple of **n** (say, 10n) -  **O(n)**
    
    - Another example (upAndDown.js):
        - first loop - **O(n)**
        - second loop - **O(n)**
        - whole - **O(n)**
    
    - Another one (printAllPairs.js):
        -  outer loop - **O(n)**
        - nested loop - **O(n)**
        - whole - **O(n<sup>2</sup>)**


# Simplifying Big O Expressions
* Constants Don't Matter:
    - O(2n) => O(n)
    - O(500) => O(1)
    - O(13n<sup>2</sup>) => O(n<sup>2</sup>)

* Smaller Terms Don't Matter:
    - O(n + 10) => O(n)
    - O(1000n + 50) => O(n)
    - O(n<sup>2</sup> + 5n + 8) => O(n<sup>2</sup>)

* Big O Shorthands:
    1. Arithmetic operarions are constant
    2. Variable assignment is constant
    3. Accessing elements in an array (by index) or object (by key) is constant
    4. In a loop, the complexity is the length of the loop times the complexity of whatever happerns inside of the loop

* Example1 (logAtLeast5.js):
    - O(n)

* Example2 (logAtMost5.js):
    - O(1)


# Space Complexity
* **auxiliary space complexity** - space required by the algorithm, not including inputs space

* Space Complexity in JS:
    - Most primitives (booleans, numbers, undefined, null) are **constant** space
    - Strings require **O(n)** space (where **n** is the string length)
    - Reference types are generally **O(n)**, where **n** is the length (for arrays) or the number of keys (for objects)

* Example1 (add.js (first)):
    - 2 numbers
    - whole complexity = **O(1)**

* Example2 (double.js):
    - **O(n)** space


# Logarithms 
*log === log<sub>2</sub>*

* The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**

* Example1: 
    - 8 */2*
    - 4 */2*
    - 2 */2*
    - 1
        - log(8) = 3

* Example2:
    - 25 */2*
    - 12.5 */2*
    - 6.25 */2*
    - 3.125 */2*
    - 1.5625 */2*
    - 0.78125
        - log(25) ≈ 4.64

* Logarithm Complexity *(it's great)*
    - searching algorithms
    - sorting algorithms
    - recursion *(sometimes)* involves log space complexity
