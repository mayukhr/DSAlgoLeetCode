import { describe, expect, it } from "vitest";
import { createGraph } from "./undirected-graph.js";

describe("createGraph (adjacency list, undirected)", () => {
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

  describe("undirected edges", () => {
    it("adds both u -> v and v -> u for one edge", () => {
      expect(createGraph(3, [[0, 1]])).toEqual([[1], [0], []]);
    });

    it("builds a complete triangle graph (K3)", () => {
      const V = 3;
      const edges: [number, number][] = [
        [0, 1],
        [0, 2],
        [1, 2],
      ];
      expect(createGraph(V, edges)).toEqual([
        [1, 2],
        [0, 2],
        [0, 1],
      ]);
    });

    it("keeps isolated vertices when V is larger than the edge span", () => {
      expect(createGraph(4, [[0, 1]])).toEqual([[1], [0], [], []]);
    });
  });

  describe("neighbor order", () => {
    it("appends neighbors in the order edges are processed", () => {
      expect(createGraph(3, [[0, 2], [0, 1]])).toEqual([[2, 1], [0], [0]]);
    });
  });

  describe("self-loops and parallel edges", () => {
    it("adds two entries for a self-loop (u and v are the same)", () => {
      expect(createGraph(2, [[0, 0]])).toEqual([[0, 0], []]);
    });

    it("duplicates adjacency entries when the same undirected edge is listed twice", () => {
      expect(createGraph(2, [[0, 1], [0, 1]])).toEqual([[1, 1], [0, 0]]);
    });
  });
});
