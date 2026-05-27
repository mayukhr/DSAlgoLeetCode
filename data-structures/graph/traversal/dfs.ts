export type AdjacencyList = number[][];

export function Dfs(adj_list: AdjacencyList, start_node: number = 0) {
    if (adj_list.length === 0 || start_node < 0 || adj_list.length <= start_node) {
        return []
    }

    // Algorithm:
    const graph_length = adj_list.length;
    let stack: number[] = [];
    let result: number[] = [];
    let visited: boolean[] = new Array(graph_length).fill(false);
    // Seed: stack gets start, result records start, start is marked visited.
    // While stack not empty: pop current_node.
    // If current_node was not visited yet: mark visited and append to result.
    // For neighbors in reverse list order (last index first): if neighbor exists and is not visited, push it on the stack.
    stack[0] = start_node;
    result[0] = start_node;
    visited[start_node] = true;
    
    while (stack.length !== 0) {
        const current_node = stack.pop();
        if (current_node === undefined) return [];
        if (visited[current_node] === false) {
            visited[current_node] = true;
            result.push(current_node);
        }
        
        for (let i = adj_list[current_node].length-1 ; i >= 0; i--) {
            const item_adj_list = adj_list[current_node]?.[i];
            if (item_adj_list !== undefined && !visited[item_adj_list]) {
                stack.push(item_adj_list);
            }
        }
        
    }

    return result;
}

const adj_list = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// const adj_list = [[2, 3, 1], [0], [0, 4], [0], [2]];
const traversal = Dfs(adj_list, 0);

console.log(traversal);

