# Singly Linked List

* **What is a linked list?**
    - A data structure that contains a **head, tail** and **length** property.
    - Linked Lists consists of nodes, and each **node** has a **value** and a **pointer**
    to another node or null.

* **Comparisons with Arrays**
    - **List**
        - Do not have indexes!
        - Connected via nodes with a **next** pointer
        - Random access is not allowed

    - **Arrays**
        - Indexed in order!
        - Insertion and deletion can be expensive
        - Can quickly be accessed at a specific index

* **List Methods**
    *singlyLinkedList.js*
    - **Pushing**
        - Adding a new **node** to the end of the Linked List!
    - **Popping**
        - Removing a **node** from the end of the Linked List!
    - **Shifting**
        - Removing a new **node** from the beginning of the Linked List!
    - **Unshifting**
        - Adding a new **node** to the beginning of the Linked List!
    - **Get**
        - Retrieving a **node** by it's position in the Linked List!
    - **Set**
        - Changing the **value** of a node based on it's position in the Linked List
    - **Insert**
        - Adding a node to the Linked List at a **specific** position
    - **Remove**
        - Removing a node from the Linked List at a **specific** position
    - **Reverse**
        - Reversing the Linked List **in place!**

* **Big O of Singly Linked Lists**
    - Insertion - **O(1)**
    - Removal - **It depends... O(1) or O(N)**
    - Searching - **O(N)**
    - Access - **O(N)**
