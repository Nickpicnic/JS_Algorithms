# Analyzing Performance of Arrays and Objects

* Built-in Data Structures *(trhough the lens of Big O)*
    
    - Objects *(instructor.js)*:
        - Big O of Obcjects:
            - Insertion - **O(1)**
            - Removal   - **O(1)**
            - Searching - **O(N)**
            - Access    - **O(1)**
            *(when you don't need any ordering, objects are an excellent choice)*
        
        - Big O of Object Methods:
            - Object.keys    - **O(N)**
            - Object.values  - **O(N)**
            - Object.entries - **O(N)**
            - hasOwnProperty - **O(1)**

    - Arrays *(arrays.js)*:
        - Big O of Arrays:
            - Insertion   - **It depends...**
            - Removal     - **It depends...**
            - Searching   - **O(N)**
            - Access      - **O(1)**
        
        - Big O of Array Methods:
            -  push                           - **O(1)**
            -  pop                            - **O(1)**
            -  shift                          - **O(N)**
            -  unshift                        - **O(N)**
            -  concat                         - **O(N)**
            -  slice                          - **O(N)**
            -  splice                         - **O(N)**
            -  sort                           - **O(N * log N)**
            -  forEach/map/filter/reduce/etc. - **O(N)**
            