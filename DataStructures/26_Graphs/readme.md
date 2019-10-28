# Graphs
* **What is it?**
    - A **graph data structure** consists of a finite (and possible mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**.

    - **Nodes** + **Connections**

* **Uses** for Graphs:
    - Social Networking
    - Location / Mapping
    - Routing Algorithms
    - Visual Hierarchy
    - File System Optimizations
    - **Everywhere! :)**

* **Types** of Graphs:
    - Essential Graph Terms:
        - **Vertex** - a node
        - **Edge** - connection between nodes
        - **Weighted / Unweighted** - values assigned to distances between vertices.
        - **Direct / Undirect** - directions assigned to distances between vertices.

    - **Types:**
        - Undirected Graph
        - Directed Graph

        - Unweighted Graph
        - Weighted Graph
        
* **Storing** Graphs: **Adjacency Matrix**
    - Adjacency Matrix
    - Adjacency List *(graph.js)*

* Adjacency Matrix Vs. List **Big O**

OPERTAION       |       ADJACENCY LIST      |       ADJACENCY MATRIX
: --            |       : -- :              |       : -- :
Add Vertex      |       O(1)                |       O(V<sup>2</sup>)
Add Edge        |       O(1)                |       O(1)
Remove Vertex   |       O(|V| + |E|)        |       O(V<sup>2</sup>)
Remove Edge     |       O(|E|)              |       O(1)
Query           |       O(|V| + |E|)        |       O(1)
Storage         |       O(|V| + |E|)        |       O(V<sup>2</sup>)

- *|V| - number of vertices*
- *|E| - number of edges*

    - A. **List**:  
        - Can take up less space (in sparse graphs)
        - Faster to iterate
        - Can be slower to lookup specific edge

    - A. **Matrix**:
        - Takes up more space (in sparse graphs)
        - Slower to iterate over all edges
        - Faster to lookup specific edge

        - *list mostly in this course*

* Implementation: *graph_implementation.js*
