# Stacks and Queues

* **Stacks**
    - **What is a Stack?**
        - A **LIFO** data structure! *(Last In First Out)*

        - The **last element added** to the stack will be **the first element removed** from the stack.
        
    - **How Is It Used?**
        - Think about a stack of **plates**, or a stack of **markers**, or a stack of **anything** :)
        - As you pile it up the last thing (or the topmost thing) is what gets removed first.

    - **Where Stacks Are Used?**
        - Managing function invocations
        - Undo / Redo
        - Routing (the history object) is treated like a stack!

    - **Implementations:**
        - With Array - *stackWithArray.js*
        - From Scratch - *stackFromScratch.js*

    - **Big O Of Stacks**
        - Insertion - **O(1)**
        - Removal - **O(1)**
        - Searching - **O(N)**
        - Access - **O(N)**

* **Queues**
    - **What is a Queue?**
        - A **FIFO** data structure! *(First In First Out)*

        - The **first element added** to the stack will be **the first element removed** from the stack.
        
    - **How Is It Used?**
        - Background tasks
        - Uploading resources
        - Printing / Task processing
    
    - **Implementations:**
        - With Array - *queuekWithArray.js*
        - From Scratch - *queueFromScratch.js*

    - **Big O Of Queues**
        - Insertion - **O(1)**
        - Removal - **O(1)**
        - Searching - **O(N)**
        - Access - **O(N)**