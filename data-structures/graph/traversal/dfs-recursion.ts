export type AdjacencyList = number[][];

export function Dfs(adj_list: AdjacencyList, start_node: number = 0) {
    if (adj_list.length === 0 || start_node < 0 || adj_list.length <= start_node) {
        return []
    }

    // create visited array
    const visited: boolean[] = new Array(adj_list.length).fill(false);
    const result: number[] = [];

    function dfs(node: number) {
        visited[node] = true;
        result.push(node);
        for(const neighbor of adj_list[node])
        if (!visited[neighbor]) {
            dfs(neighbor)
        }
    }

    dfs(start_node);
    return result;
}

const adj_list = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// const adj_list = [[2, 3, 1], [0], [0, 4], [0], [2]];
const traversal = Dfs(adj_list, 0);

console.log(traversal);

