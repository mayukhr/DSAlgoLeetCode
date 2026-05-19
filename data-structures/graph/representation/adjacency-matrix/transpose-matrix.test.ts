import { describe, expect, it } from "vitest";
import { transpose, type matrix } from "./transpose-matrix.js";

describe("transpose", () => {
  describe("square matrices", () => {
    it("transposes a 1×1 matrix", () => {
      expect(transpose([[42]])).toEqual([[42]]);
    });

    it("transposes a 2×2 matrix", () => {
      expect(
        transpose([
          [1, 2],
          [9, -2],
        ]),
      ).toEqual([
        [1, 9],
        [2, -2],
      ]);
    });

    it("transposes a larger square matrix", () => {
      const input: matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      expect(transpose(input)).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ]);
    });

    it("is an involution for square matrices (transpose twice restores)", () => {
      const original: matrix = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 0, 0],
      ];
      expect(transpose(transpose(original))).toEqual(original);
    });
  });

  describe("rectangular matrices", () => {
    it("transposes wide → tall (more columns than rows)", () => {
      expect(
        transpose([
          [1, 2, 3],
          [4, 5, 6],
        ]),
      ).toEqual([
        [1, 4],
        [2, 5],
        [3, 6],
      ]);
    });

    it("transposes tall → wide (more rows than columns)", () => {
      expect(
        transpose([
          [1, 4],
          [2, 5],
          [3, 6],
        ]),
      ).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });

    it("round-trips with transpose for non-square shapes", () => {
      const original: matrix = [
        [10, 20],
        [30, 40],
        [50, 60],
      ];
      expect(transpose(transpose(original))).toEqual(original);
    });
  });

  describe("degenerate shapes", () => {
    it("maps a single row to a column vector", () => {
      expect(transpose([[1, 2, 3, 4]])).toEqual([[1], [2], [3], [4]]);
    });

    it("maps a single column to a row vector", () => {
      expect(transpose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
    });

    it("handles a 1×0 row (one empty row)", () => {
      expect(transpose([[]])).toEqual([]);
    });
  });

  describe("values and immutability-ish behavior", () => {
    it("preserves zeros and negative entries", () => {
      expect(
        transpose([
          [0, -1],
          [-2, 3],
        ]),
      ).toEqual([
        [0, -2],
        [-1, 3],
      ]);
    });

    it("does not mutate the input matrix rows", () => {
      const input: matrix = [
        [1, 2],
        [3, 4],
      ];
      const snapshot = input.map((row) => [...row]);
      transpose(input);
      expect(input).toEqual(snapshot);
    });
  });

  describe("invalid or ambiguous inputs", () => {
    it("throws when the matrix is empty (no rows)", () => {
      expect(() => transpose([])).toThrow();
    });
  });
});
