import { describe, expect, it } from "vitest";
import { Bfs } from "./bfs.js";

describe("Bfs (adjacency list)", () => {
  describe("reachability from start", () => {
    it("visits only the component containing the start node", () => {
      // Two disjoint edges: 0—1 and 2—3
      const adj: number[][] = [[1], [0], [3], [2]];
      expect(Bfs(adj, 0)).toEqual([0, 1]);
    });

    it("handles a start node in the second component", () => {
      const adj: number[][] = [[1], [0], [3], [2]];
      expect(Bfs(adj, 2)).toEqual([2, 3]);
    });
  });

  describe("visit order (breadth-first)", () => {
    it("explores closer vertices before farther ones on a path", () => {
      // 0 — 1 — 2 — 3
      const adj: number[][] = [[1], [0, 2], [1, 3], [2]];
      expect(Bfs(adj, 0)).toEqual([0, 1, 2, 3]);
    });

    it("respects queue order when the same depth has multiple neighbors", () => {
      // 0 connects to 2 then 1 in adjacency order; 1 leads to 3 before 2's subtree
      const adj: number[][] = [
        [2, 1],
        [0, 3],
        [0],
        [1],
      ];
      // Standard FIFO BFS from 0: visit 0, dequeue 0 → enqueue 2,1; dequeue 2 → nothing new; dequeue 1 → enqueue 3
      expect(Bfs(adj, 0)).toEqual([0, 2, 1, 3]);
    });
  });

  describe("basics", () => {
    it("returns the start alone on a single vertex", () => {
      expect(Bfs([[]], 0)).toEqual([0]);
    });

    it("supports a non-zero start on a triangle", () => {
      const adj: number[][] = [
        [1, 2],
        [0, 2],
        [0, 1],
      ];
      expect(Bfs(adj, 2)).toEqual([2, 0, 1]);
    });
  });
});
