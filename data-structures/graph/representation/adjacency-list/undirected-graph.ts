export type Edge = number[];
export type Graph = number[][];

export function createGraph(V: number, edges: Edge[]): Graph {
    // Fill the graph with all 0s. 
    // If V=3, graph would look like: [[], [], []]
    const adjacency_list: Graph = new Array(V).fill(null).map(() => []);
    
    // here will fill the array [[], [], []] to 
    // [[1,2], [], []]
    for (const current_edge of edges) {
        const u: number = current_edge[0];
        const v: number = current_edge[1];

        adjacency_list[u].push(v);
        //as undirected graph
        adjacency_list[v].push(u);
    }

    return adjacency_list;
}


let V = 3;

// List of edges (u, v)
let edges: Edge[] = [[0, 1], [0, 2], [1, 2]];

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

