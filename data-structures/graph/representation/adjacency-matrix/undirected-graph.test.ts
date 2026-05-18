import { describe, expect, it } from "vitest";
import { createGraph } from "./undirected-graph.js";

describe("createGraph", () => {
  describe("shape and defaults", () => {
    it("returns a V-by-V matrix of zeros when there are no edges", () => {
      expect(createGraph(4, [])).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    });

    it("handles a single vertex with no edges", () => {
      expect(createGraph(1, [])).toEqual([[0]]);
    });

    it("returns an empty matrix for zero vertices", () => {
      expect(createGraph(0, [])).toEqual([]);
    });
  });

  describe("undirected edges", () => {
    it("sets both directions for one edge", () => {
      expect(createGraph(3, [[0, 1]])).toEqual([
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ]);
    });

    it("builds a complete triangle graph (K3)", () => {
      const V = 3;
      const edges: [number, number][] = [
        [0, 1],
        [0, 2],
        [1, 2],
      ];
      expect(createGraph(V, edges)).toEqual([
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
      ]);
    });

    it("treats duplicate edges as a single adjacency (still 1)", () => {
      expect(createGraph(2, [[0, 1], [0, 1], [1, 0]])).toEqual([
        [0, 1],
        [1, 0],
      ]);
    });

    it("records a self-loop on the diagonal", () => {
      expect(createGraph(2, [[0, 0]])).toEqual([
        [1, 0],
        [0, 0],
      ]);
    });
  });

  describe("isolation and larger graphs", () => {
    it("leaves unmentioned vertices disconnected", () => {
      expect(createGraph(4, [[1, 2]])).toEqual([
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ]);
    });

    it("handles a path graph across several vertices", () => {
      expect(createGraph(5, [[0, 1], [1, 2], [2, 3], [3, 4]])).toEqual([
        [0, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
      ]);
    });
  });
});
