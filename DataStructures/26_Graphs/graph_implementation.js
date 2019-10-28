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
}