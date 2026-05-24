export type AdjacencyList = number[][];

/**
 * Breadth-first traversal from `start_node`.
 * Visits only vertices reachable in an undirected sense along directed edges
 * (out-neighbors); order is FIFO by discovery.
 */
export function Bfs(adj_list: AdjacencyList, start_node: number = 0): number[] {
  if (adj_list.length === 0 || start_node < 0 || start_node >= adj_list.length) {
    return [];
  }

  const visited: boolean[] = new Array(adj_list.length).fill(false);
  const queue: number[] = [];
  const result: number[] = [];

  queue.push(start_node);
  visited[start_node] = true;

  while (queue.length !== 0) {
    const current = queue.shift();
    if (current === undefined) return [];
    result.push(current);

    for (const v of adj_list[current]) {
      if (visited[v] === false) {
        visited[v] = true;
        queue.push(v);
      }
    }
  }

  return result;




  // const visited: number[] = [];
  // const queue: number[] = [start_node];
  // const seen = new Set<number>([start_node]);
  // let head = 0;

  // while (head < queue.length) {
  //   const u = queue[head++];
  //   visited.push(u);
  //   for (const v of adj_list[u]) {
  //     if (!seen.has(v)) {
  //       seen.add(v);
  //       queue.push(v);
  //     }
  //   }
  // }
}

const adj_list = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// const adj_list = [[2, 3, 1], [0], [0, 4], [0], [2]];
const traversal = Bfs(adj_list, 0);

console.log(traversal);
