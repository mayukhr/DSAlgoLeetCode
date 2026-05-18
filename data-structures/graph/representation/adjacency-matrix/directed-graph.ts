// https://www.geeksforgeeks.org/dsa/graph-and-its-representations/

export type Edge = [number, number];

export function createGraph(V: number, edges: Edge[]) {
    // construct the base adjacency_matrix two ways:
    // 1. use Array.from
    // 2. use double loop
    // const adjacency_matrix = Array.from({ length: V }, () => new Array(V).fill(0));
   
    // const emptyRow = () => new Array(V).fill(0);
    // const adjacency_matrix = Array.from({ length: V }, emptyRow);
    
    let adjacency_matrix: number[][] = [];
    for (let row = 0; row < V; row++) {
        adjacency_matrix[row] = [];
        for (let column = 0; column < V; column++) { 
            adjacency_matrix[row][column] = 0;
        }
    }

    // update adjacency_matrix based on edges
    for (let edge of edges) {
        let v1 = edge[0];
        let v2 = edge[1];
        adjacency_matrix[v1][v2] = 1
    }

    return adjacency_matrix;

}


const V: number = 3;
const edges: Edge[] = [[0, 1], [0, 2], [1, 2]];

// adjacency_matrix should look like: [[0,1,1], [1,0,1], [1,1,0]];
const adjacency_matrix = createGraph(V, edges);

console.log("Adjacency Matrix Representation:");
for (let i = 0; i < V; i++) {
    let row = "";
    for (let j = 0; j < V; j++)
        row += adjacency_matrix[i][j] + " ";
    console.log(row.trim());
}