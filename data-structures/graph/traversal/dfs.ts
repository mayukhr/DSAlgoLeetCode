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
    // start traversal with first node
    // push it to stack
    // run a loop till stack is empty
    // for each item in a stack (ie, node) go to adj_list
    // pick 1st item from the adj_item/adj_list[i]
    // check if that is already visited, then do nothing and move to the next item
    // else put the item on stack
    // and make it visited in the visited array
    // end
    stack[0] = start_node;
    result[0] = start_node;
    visited[start_node] = true;
    
    while (stack.length !== 0) {
        const current_node = stack.pop();
        if (current_node === undefined) return [];

        for (let i = 0; i < adj_list[current_node].length; i++ ) {
            const first_item_adj_list = adj_list[current_node]?.[i];
            if (visited[first_item_adj_list] === false) {
                stack.push(first_item_adj_list);
                visited[first_item_adj_list] = true;
                result.push(first_item_adj_list);
            }
        }
        
    }

    return result;
}



const adj_list = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// const adj_list = [[2, 3, 1], [0], [0, 4], [0], [2]];
const traversal = Dfs(adj_list, 0);

console.log(traversal);
