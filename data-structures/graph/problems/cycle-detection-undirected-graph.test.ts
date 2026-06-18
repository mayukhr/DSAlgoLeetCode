import { describe, expect, it } from "vitest";
import { Dfs_CycleDetection } from "./cycle-detection-undirected-graph.js";

/**
 * Spec: DFS cycle detection on an undirected graph represented as an adjacency list.
 * Every connected component is searched; `start_node` is accepted for API compatibility
 * but does not limit which components are checked.
 */
describe("Dfs_CycleDetection (undirected adjacency list)", () => {
  describe("no cycle", () => {
    it("returns false for a single isolated vertex", () => {
      expect(Dfs_CycleDetection([[]], 0)).toBe(false);
    });

    it("returns false for a single edge (two vertices)", () => {
      expect(Dfs_CycleDetection([[1], [0]], 0)).toBe(false);
    });

    it("returns false for a simple path / tree", () => {
      // 0 — 1 — 2 — 3
      const adj: number[][] = [[1], [0, 2], [1, 3], [2]];
      expect(Dfs_CycleDetection(adj, 0)).toBe(false);
    });

    it("returns false for a star (hub with leaves, no back edges)", () => {
      const adj: number[][] = [
        [1, 2, 3],
        [0],
        [0],
        [0],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(false);
    });

    it("returns false for a larger tree", () => {
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
      expect(Dfs_CycleDetection(adj, 0)).toBe(false);
    });
  });

  describe("cycle present", () => {
    it("detects a triangle", () => {
      const adj: number[][] = [
        [1, 2],
        [0, 2],
        [0, 1],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(true);
    });

    it("detects a triangle when starting at a different vertex on the cycle", () => {
      const adj: number[][] = [
        [1, 2],
        [0, 2],
        [0, 1],
      ];
      expect(Dfs_CycleDetection(adj, 2)).toBe(true);
    });

    it("detects a 4-cycle (square)", () => {
      const adj: number[][] = [
        [1, 3],
        [0, 2],
        [1, 3],
        [0, 2],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(true);
    });

    it("detects a cycle with a tree branch attached", () => {
      // triangle 0—1—2—0 plus leaf 3 hanging off 2
      const adj: number[][] = [
        [1, 2],
        [0, 2],
        [1, 0, 3],
        [2],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(true);
    });

    it("detects a self-loop as a cycle", () => {
      expect(Dfs_CycleDetection([[0], []], 0)).toBe(true);
    });
  });

  describe("disconnected components", () => {
    it("detects a cycle in another component even when start cannot reach it", () => {
      // Component A: isolated vertex 0 (no edges)
      // Component B: triangle 1—2—3—1
      const adj: number[][] = [
        [],
        [2, 3],
        [1, 3],
        [1, 2],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(true);
    });

    it("detects a cycle in a cyclic component while start is in an acyclic one", () => {
      // acyclic component 0—1; cyclic component 2—3—4—2
      const adj: number[][] = [
        [1],
        [0],
        [3, 4],
        [2, 4],
        [2, 3],
      ];
      expect(Dfs_CycleDetection(adj, 0)).toBe(true);
    });

    it("returns false when every component is acyclic", () => {
      const adj: number[][] = [[1], [0, 2], [1, 3], [2]];
      expect(Dfs_CycleDetection(adj, 3)).toBe(false);
    });
  });

  describe("parent edge is not mistaken for a cycle", () => {
    it("treats the immediate parent neighbor as safe on a tree edge", () => {
      // DFS from 0 visits 1; when at 1, neighbor 0 is parent — not a cycle
      expect(Dfs_CycleDetection([[1], [0]], 0)).toBe(false);
    });
  });
});
