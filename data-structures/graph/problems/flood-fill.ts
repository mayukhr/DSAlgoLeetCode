export type Image = number[][];
export type Node = number[];

export function floodFill(source_row: number, source_col: number, image_graph: Image, new_color: number): Image {
    // if pixel at source is already newColor → return image
    if (image_graph[source_row][source_col] === new_color )
        return image_graph;

    const old_color: number = image_graph[source_row][source_col]; 

    function DFS(row: number, col: number) {
        // Boundary conditions of recursion:
        // if array out of bound, do not do anything
        if (row < 0 || row >= image_graph.length || col < 0 || col >= image_graph[0].length)
            return;

        // Boundary conditions of recursion:
        // if not old color, do not color it
        if (image_graph[row][col] !== old_color)
            return;

        image_graph[row][col] = new_color;

        DFS(row + 1, col) // right
        DFS(row - 1, col) // left
        DFS(row , col - 1) // top
        DFS(row, col + 1) // bottom
    }
    DFS(source_row, source_col);
    return image_graph;
} 

const source_row = 1;
const source_col = 1;

const new_color: number = 2;
const image_graph = [[1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]];
const recolored_image_graph = floodFill(source_row, source_col, image_graph, new_color);

console.log(recolored_image_graph);