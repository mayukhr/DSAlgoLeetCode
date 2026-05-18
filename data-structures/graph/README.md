# Graph — interview prep

Graph problems are common in interviews. Below is a compact checklist of ideas worth knowing, in roughly the order many people learn them.

## GeeksForGeeks

- [Graph](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)

## Representations

- **Adjacency list** — default choice for sparse graphs; easy to iterate neighbors; typical for coding interviews.
- **Adjacency matrix** — `O(V^2)` space; fast edge lookup; rare unless the graph is dense or given as a matrix (e.g. grid problems).
- **Implicit graphs** — nodes are states (e.g. board positions, `(row, col)` on a grid); edges are valid moves; you often do not build an explicit adjacency structure.

## Traversal building blocks

- **DFS (depth-first)** — stack or recursion; good for connectivity, cycles (with coloring), exhaustive paths, backtracking-style exploration.
- **BFS (breadth-first)** — queue; layers by distance from a start; **shortest path in unweighted graphs** (or uniform edge cost).
- **Visited sets / coloring** — avoid revisiting; three colors (white/gray/black) often used for **cycle detection in directed graphs** on DFS trees.

## Shortest paths

- **BFS** — shortest path when every edge has weight 1 (or treat as unweighted).
- **Dijkstra** — non-negative edge weights; priority queue keyed by best-known distance.
- **0–1 BFS** — deque trick when weights are only 0 and 1.
- **Bellman–Ford** — negative edges allowed (no negative cycles); relax `V - 1` times; less common in interviews but good to name.

## Directed acyclic graphs (DAGs)

- **Topological sort** — linear order respecting all edges; only exists if no cycles.
  - **Kahn’s algorithm** — repeatedly remove nodes with in-degree 0 (BFS on in-degrees).
  - **DFS postorder** — finish times reversed; detect cycle if you see a back edge to a gray node.

## Connectivity and structure

- **Connected components (undirected)** — DFS/BFS per unvisited node, or **Union–Find** for dynamic edge additions.
- **Union–Find (Disjoint Set Union)** — near-constant amortized `find`/`union`; cycle detection in undirected graphs, Kruskal’s MST, grouping.
- **Bipartite check** — two-coloring with BFS/DFS; fails iff odd cycle exists.

## Trees as graphs

- **Tree** — connected acyclic undirected graph; `n` nodes, `n - 1` edges; unique simple path between any two nodes.
- **Rooted tree** — parent/child; often adjacency list + pick root; **LCA**, diameter, subtree sums are recurring patterns.

## Weighted graphs and MST

- **Minimum spanning tree (MST)** — connect all vertices with minimum total edge weight.
  - **Kruskal** — sort edges, Union–Find to avoid cycles.
  - **Prim** — grow tree from a start node with a min-heap on frontier edges.

## Advanced (good to recognize)

- **Strongly connected components (SCC)** — maximal subgraphs where every pair reaches each other; **Kosaraju** or **Tarjan** (less frequent than BFS/DFS/topo unless the company leans theory-heavy).
- **Bridges / articulation points** — edges or vertices whose removal increases components; DFS low-link ideas.

## Problem patterns that map to graphs

- **Grid as graph** — 4- or 8-direction neighbors; bounds checks; “number of islands,” rotten oranges, word ladder (implicit graph).
- **State-space graphs** — locks, puzzles, shortest transformation sequences; nodes are states, edges are valid transitions.
- **Interval / scheduling** — sometimes modeled as DAG for dependencies (topo + longest path in DAG for critical path style questions).

## What to rehearse

- Implement **adjacency list**, **iterative BFS**, **iterative DFS**, and **recursive DFS** from memory.
- Know **time/space**: usually `O(V + E)` for traversals; Dijkstra `O((V + E) log V)` with a binary heap.
- Practice stating **why** you picked BFS vs DFS for a given problem before you code.
