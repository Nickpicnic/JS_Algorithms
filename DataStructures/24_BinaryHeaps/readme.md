# Binary Heaps

* **What is a Binary Heap?**
    - **Very** similar to a binary search tree, but with some different rules!
        - In a **MaxBinaryHeap**, parent nodes are always **larger** than child nodes. 
        - In a **MinBinaryHeap**, parent nodes are always **smaller** than child nodes.

    - **Max Binary Heap**
        - Each parent has at most two child nodes.
        - The value of each parent nodes is **always** greater than its child nodes.
        - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
        - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
    - **Min Binary Heap**
        - Each parent has at most two child nodes.
        - The value of each parent nodes is **always** smaller than its child nodes.
        - In a min Binary Heap the parent is smaller than the children, but there are no guarantees between sibling nodes.
        - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

    - **Useful?**
        - Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures.
        - They are alse used quite a bit, with a **graph traversal** algorithms.

* **Storing Heaps**
    - Representing a Heap *(as an array)*
        - For any index of an array **n...**
        - The **left** child is stored at **2n + 1**
        - The **right** child is at **2n + 2**
    - What if we have a child node and want to find its parent?
        - For any child node at index **n...**
        - Its parent is at index **(n-1)/2**

* **Insert Intro:**
    - Implementation: *heap.js*
    - Adding to a MaxBinaryHeap
        - Add to the end
        - Bubble up
* **Removing from a Heap:**
    - Remove the root
    - Replace with the most recently added
    - Adjust (sink down)

    - **Sink Down?**
        - The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called **down-heap** (also known as:
            - *buble-down* 
            - *percolate-down*
            - *sift-down* 
            - *trickle-down*
            - *heapify-down*
            - *cascade-down*
            - *extract-min/max*)


# Priority Queue

* **Building a Priority Queue**
    - What is a priority queue?
        - A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
    
    - **A Naive Version**
        - Use a list to store all elements: 
            - priority:3 priority:1 priority:2 priority:5 priority:4
            - *iterate over the entire thing to find the highest priority element*

    - Implementation: 
        - *priorityQueue.js*
        - **Our Priority Queue:**
            - Write a Min Binary Heap - lower number means higher priority.
            - Each Node has a val and a priority. Use the priority to build the heap.
            - **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
            - **Dequeue** method removes root element, returns it, and rearranges heap using priority.

* **Big O of Binary Heaps**
    - Insertion - **O(log N)**
    - Removal - **O(log N)**
    - Search - **O(N)**