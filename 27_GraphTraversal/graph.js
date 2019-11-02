// undirected graph

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex_name) {
        if(!this.adjacencyList[ vertex_name ]) this.adjacencyList[ vertex_name ] = [];
    }
    // both direction edge
    addEdge(vertex1, vertex2){
        this.adjacencyList[ vertex1 ].push(vertex2);
        this.adjacencyList[ vertex2 ].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[ vertex1 ] = this.adjacencyList[ vertex1 ].filter(
            vertex => (vertex !== vertex2)
        );
        this.adjacencyList[ vertex2 ] = this.adjacencyList[ vertex2 ].filter(
            vertex => (vertex !== vertex1)
        );
    }
    removeVertex(vertex_name){
        while(this.adjacencyList[ vertex_name ].length){
            const adjacencyVertex = this.adjacencyVertex[ vertex_name ].pop();
            this.removeEdge(adjacencyVertex, vertex_name);
        }
        delete this.adjacencyList[ vertex_name ];
    }
    // deep first search
    DFS_recursive(start){
        const result  = [];
        const visited = {};
        const adjacencyList= this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[ vertex ] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        return result;
    }
    DFS_iterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    // breadth first search
    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


// test
let g = new Graph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


//     A
//   /   \
//  B     C
//  |     |
//  D --- E
//   \   /
//     F

console.log(g.DFS_recursive("A"));
console.log(g.DFS_iterative("A"));
console.log(g.BFS("A"));