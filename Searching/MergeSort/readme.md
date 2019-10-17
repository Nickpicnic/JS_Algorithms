# Merge Sort

* **Faster Sorts**
    - There is a family of sorting algorithms that can imorive time complexity from O(*n<sup>2</sup>*) to O(*n* log *n*)
    - There's a tradeoff between efficiency and simplicity
    - The more efficient algorithms are much less simple, and generally take to understand

* **Merge Sort:**
    - It's a combination of two things - merging and sorting!
    - Explots the fact that arrays of **0** or **1** element are always sorted
    - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

    * **Merging Arrays:**
        - in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
        
        - Given two sorted arrays which are sorted. this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays *(mergeArrays.js)*

        - This function should run in **O(n + m)** time and **O(n + m)** space and **should not** modify the parameters passed to it
    * **Big O of Merge Sort:**

    Time Complexity (Best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity
    :--                   | :--:                      | :--:                    | :--:
    O(*n* log *n*)         | O(*n* log *n*)            | O(*n* log *n*)          | O(*n*)

    - Why O(*n* log *n*)?
        - *O(log n) decompositions*
        - *O(n) comparisons per decomposition*