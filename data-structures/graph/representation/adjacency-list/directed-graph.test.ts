import { describe, expect, it } from "vitest";
import { createGraph } from "./directed-graph.js";

describe("createGraph (adjacency list, directed)", () => {
  describe("shape and defaults", () => {
    it("returns V empty neighbor lists when there are no edges", () => {
      expect(createGraph(4, [])).toEqual([[], [], [], []]);
    });

    it("handles a single vertex with no edges", () => {
      expect(createGraph(1, [])).toEqual([[]]);
    });

    it("returns an empty list for zero vertices", () => {
      expect(createGraph(0, [])).toEqual([]);
    });
  });

  describe("directed edges", () => {
    it("adds only u -> v for one edge", () => {
      expect(createGraph(3, [[0, 1]])).toEqual([[1], [], []]);
    });

    it("supports multiple outgoing edges from the same vertex", () => {
      expect(createGraph(3, [[0, 1], [0, 2]])).toEqual([[1, 2], [], []]);
    });

    it("preserves edge order in each adjacency list", () => {
      expect(createGraph(3, [[0, 2], [0, 1]])).toEqual([[2, 1], [], []]);
    });

    it("matches the sample triangle used in directed-graph.ts", () => {
      const V = 3;
      const edges = [
        [1, 0],
        [1, 2],
        [2, 0],
      ];
      expect(createGraph(V, edges)).toEqual([[], [0, 2], [0]]);
    });
  });

  describe("self-loops and parallel edges", () => {
    it("allows a self-loop as a single entry in the list", () => {
      expect(createGraph(2, [[0, 0]])).toEqual([[0], []]);
    });

    it("keeps duplicate neighbors when the same edge appears twice", () => {
      expect(createGraph(2, [[0, 1], [0, 1]])).toEqual([[1, 1], []]);
    });
  });
});
