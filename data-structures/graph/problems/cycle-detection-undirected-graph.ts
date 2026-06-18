export type AdjacencyList = number[][];

export function Dfs_CycleDetection(adj_list: AdjacencyList, start_node: number): boolean{
    const visited: boolean[] = new Array(adj_list.length).fill(false);
    const parent: number[] = new Array(adj_list.length).fill(-1);

    function dfs(node: number, parent_node: number = -1): boolean {
        visited[node] = true;
        parent[node] = parent_node;

        for (const neighbor of adj_list[node]) {
            if (neighbor !== parent[node] && visited[neighbor]) {
                return true;
            }

            if (!visited[neighbor]) {
                if (dfs(neighbor, node)) {
                    return true;
               }
            }
        }
        return false;
    }

    // return dfs(start_node);

    for (let i = 0; i < adj_list.length; i++) {
        if (!visited[i] && dfs(i)) {
            return true;
        }
    }
    return false;
}

// const adj_list = [[1, 2], [0, 2], [1, 0], [2]];
// const adj_list = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// const adj_list = [[1], [0], [3,4], [2,4], [2,3]]
const adj_list = [[1], [0], [3], [4],[3]]

const start_node = 0;

const isCycleDetected:boolean = Dfs_CycleDetection(adj_list, start_node);

console.log(isCycleDetected)

