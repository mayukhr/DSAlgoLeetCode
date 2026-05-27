import { describe, expect, it } from "vitest";
import { Dfs } from "./dfs.js";

/**
 * Spec: depth-first pre-order from `start_node` following adjacency list order
 * (first neighbor is explored fully before later neighbors at the same level).
 * Invalid inputs return [].
 */
describe("Dfs (adjacency list)", () => {
  describe("invalid inputs", () => {
    it("returns [] for an empty graph", () => {
      expect(Dfs([])).toEqual([]);
    });

    it("returns [] when start is negative", () => {
      expect(Dfs([[1], [0]], -1)).toEqual([]);
    });

    it("returns [] when start is out of range", () => {
      expect(Dfs([[1], [0]], 2)).toEqual([]);
    });
  });

  describe("reachability from start", () => {
    it("visits only the component containing the start node", () => {
      const adj: number[][] = [[1], [0], [3], [2]];
      expect(Dfs(adj, 0)).toEqual([0, 1]);
    });

    it("handles a start node in the second component", () => {
      const adj: number[][] = [[1], [0], [3], [2]];
      expect(Dfs(adj, 2)).toEqual([2, 3]);
    });
  });

  describe("visit order (depth-first)", () => {
    it("walks to the deepest vertex along the first neighbor before siblings", () => {
      //        0
      //      /   \
      //     1     2
      //     |
      //     3
      const adj: number[][] = [
        [1, 2],
        [0, 3],
        [0],
        [1],
      ];
      // Pre-order: 0 → first neighbor 1 → 3, then backtrack to 0's next neighbor 2
      expect(Dfs(adj, 0)).toEqual([0, 1, 3, 2]);
    });

    it("follows a simple path in order", () => {
      const adj: number[][] = [[1], [0, 2], [1, 3], [2]];
      expect(Dfs(adj, 0)).toEqual([0, 1, 2, 3]);
    });
  });

  describe("basics", () => {
    it("returns the start alone on a single vertex", () => {
      expect(Dfs([[]], 0)).toEqual([0]);
    });

    it("supports a non-zero start on a triangle", () => {
      const adj: number[][] = [
        [1, 2],
        [0, 2],
        [0, 1],
      ];
      expect(Dfs(adj, 2)).toEqual([2, 0, 1]);
    });
  });
});
