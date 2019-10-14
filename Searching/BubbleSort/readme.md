# Sorting
* Examples:
    - Sorting numbers from smallest to largest
    - Sorting names alphabetically
    - Sorting movies on release year
    - Sorting movies based on revenue

* **Built-in JS Sort:**
    *doesn't always work as expect*
    - The built-in sort method accepts an optional *comparator* function
    - The comparator looks at pairs of elements(*a* and *b*), determines their sort order based on the return value
        - If it returns a negative number, *a* should come before *b*
        - If it returns a positive number, *a* should come after *b*
        - If it returns 0, *a* and *b* are the same as far as the sort is concerned

* **Bubble Sort**
    * **Overview:**
        - A sorting algorithm where the largest valuest bubble up to the top!
        - **Swap** is very important in bubble sort algorithm *(implement in swap.js)*
        *implementation in bubbleSort.js*
    
    * **Complexity:**
        - O(n<sup>2</sup>) *in general*
        - o(n) *best case*