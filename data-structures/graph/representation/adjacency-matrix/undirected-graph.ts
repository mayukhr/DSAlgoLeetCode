type Edge = [number, number];

export function createGraph(V: number, edges: Edge[]) {
    const adjacency_matrix = Array.from({ length: V }, () => new Array(V).fill(0));

    for (const item of edges) {
        const a = item[0];
        const b = item[1];
        adjacency_matrix[a][b] = 1;
        adjacency_matrix[b][a] = 1;
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