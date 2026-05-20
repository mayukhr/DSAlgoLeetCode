export type Edge = number[];
export type Graph = number[][];

export function createGraph(V: number, edges: Edge[]): Graph {
    const adjacency_list: Graph = new Array(V).fill(null).map(() => []);

    for (let edge of edges) {
        let u: number = edge[0];
        let v: number = edge[1];

        adjacency_list[u].push(v);
    }
    return adjacency_list;
}


let V = 3;

// List of edges (u, v)
let edges = [[1, 0], [1, 2], [2, 0]];

// Build the graph using edges
let adj = createGraph(V, edges);

console.log("Adjacency List Representation:");
for (let i = 0; i < V; i++) {

    // Print the vertex
    let row = i + ": ";
    for (let j of adj[i]) {

        // Print its adjacent
        row += j + " ";
    }
    console.log(row.trim());
}