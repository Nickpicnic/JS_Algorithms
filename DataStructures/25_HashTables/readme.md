# Hash Tables
*also known as hash map*

* **What is a Hash Table**
    - Hash tables are used to store *key-value* pairs.
    - They are like arrays, but the keys are not ordered.
    - Unlike arrays, hash tables are *fast* for all of the following operations:    
        - finding values
        - adding new values
        - removing values

    - Why does it matter?
        - Nearly every programming language has some sort of hash table data structure.
        - Because of their speed, hash tables are very commonly used!

    - **Hash tables in the wild:**
        - **Python** has **Dictionaries**
        - **JS** has **Objects** and **Maps**<sup>*</sup>
        - **Java, Go & Scala** have **Maps**
        - **Ruby** has **Hashes**

* **The Hash Part**
    - To implement a hash table, we'll be using an array.
    - In order to look up values by key, we need a way to **convert keys into valid array indices**.
    - A function that performs this task is called a **hash function**

    - **What makes a good hash?** *(not a cryptographically secure one)*
        1. Fast(i.e. constant time)
        2. Doesn't cluster outputs at specific indices, but distributes uniformly.
        3. Deterministic (same input yields same output)
    
    - Implementation *hash.js*
    - **Prime numbers**
        - The prime number in the hash is helpful in spreading out the keys more uniformly.
        - It's also helpful if the array that you-re putting values into has a prime length.

* **Collisions**
    - Even with a large array and a great hash function, collisions are inevitable.
    - There are many strategies for dealing with collisions, two of them:
        1. **Separate Chaining**
        2. **Linear Probing**

    - **Separate Chaining**
        - With *separate chaining*, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
        - This allows us to store multiple key-value pairs at the same index.

    - **Linear Probing**
        - With *linear probing*. when we find a collision. we search through the array to find the next empty slot.
        - Unlike with separate

* **Hash Table Class**
    - Set / Get
        - Set: 
            1. Accepts a key and a value
            2. Hashes the key
            3. Stores the key-value pair in the hash table array via separate chaining.
        - Get:
            1. Accepts a key
            2. Hashes the key
            3. Retrieves the key-value pair in the hash table.
            4. If the key isn't found, returns *undefined*.

* **Keys / Values**
    - Keys:
        1. Loops through the hash table array and returns an array of keys in the table.
    
    - Values:
        1. Loops through the hash table array and returns an array of values in the table.

* **Big O of Hash Tables**
    - *(average case)*
    - Insert - **O(1)**
    - Deletion - **O(1)**
    - Access - **O(1)**