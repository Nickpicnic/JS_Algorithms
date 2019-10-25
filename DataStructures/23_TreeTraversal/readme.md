# Tree Traversal
* **Traversing a Tree**
    - **Two Ways:**
        - Breadth-first Search
        - Depth-first Search:
            - InOrder
            - PreOrder
            - PostOrder

* **Breadth First Search**
    - **Steps - Iteratively:**
        - Create a queue and a variable to store the values of nodes visited
        - Place the root node in the queue
        - Loop as long as there is anything in the queue
            - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
            - If there is a left property on the node dequeued - add it to the queue
            - If there is a right property on the node dequeued - add it to the queue
        - Return the variable that stores the value

* **Depth First Search**
    - **Steps -Recursively** 
        - Create a variable to store the values of nodes visited
        - Store the root of the BST in a variable called current
        - Write a helper function which accepts a node
            - Push the value of the node to the variable that stores the values
            - If the node has a left property, call the helper function with the left property on the node
            - If the node has a right property, call the helper funtion with the right property on the node
        - Invoke the helper functionn with the current varibale
        - Return the array of values.

* **Depth First Post Order**
    - **Steps -Recursively** 
        - Create a variable to store the values of nodes visited
        - Store the root of the BST in a variable called current
        - Write a helper function which accepts a node
            - If the node has a left property, call the helper function with the left property on the node
            - If the node has a right property, call the helper funtion with the right property on the node
            - Push the value of the node to the variable that stores the values
        - Invoke the helper functionn with the current varibale
        - Return the array of values.

* **Depth First In Order**
    - **Steps -Recursively** 
        - Create a variable to store the values of nodes visited
        - Store the root of the BST in a variable called current
        - Write a helper function which accepts a node
            - If the node has a left property, call the helper function with the left property on the node
            - Push the value of the node to the variable that stores the values
            - If the node has a right property, call the helper funtion with the right property on the node
        - Invoke the helper functionn with the current varibale
        - Return the array of values.

* **When to use BFS and DFS**
    - **Breadth First**  
        - Lots of nodes to keep track of!
    - **BFS - InOrder**
        - Uses commonly with BST's
        - Notice we get all nodes in the tree in their underlying order
    - **BFS - PreOrder**
        - Can be used to "export" a tree structure so that it is easily reconstructed or copied.