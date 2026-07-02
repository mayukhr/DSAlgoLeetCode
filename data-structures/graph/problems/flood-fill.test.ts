import { describe, expect, it } from "vitest";
import { floodFill, type Image } from "./flood-fill.js";

function copyImage(image: Image): Image {
  return image.map((row) => [...row]);
}

describe("floodFill", () => {
  describe("connected region recoloring", () => {
    it("recolors the connected component from the classic example", () => {
      const image = copyImage([
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1],
      ]);

      // Bottom-right 1s connect via (1,3) — (2,1) does not block that path.
      expect(floodFill(1, 1, image, 2)).toEqual([
        [2, 2, 2, 0],
        [0, 2, 2, 2],
        [1, 0, 2, 2],
      ]);
    });

    it("recolors an entire uniform image", () => {
      const image = copyImage([
        [3, 3],
        [3, 3],
      ]);

      expect(floodFill(0, 0, image, 5)).toEqual([
        [5, 5],
        [5, 5],
      ]);
    });

    it("recolors only the connected same-color cells", () => {
      const image = copyImage([
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ]);

      expect(floodFill(1, 1, image, 2)).toEqual([
        [1, 0, 1],
        [0, 2, 0],
        [1, 0, 1],
      ]);
    });

    it("does not leak across diagonals (4-directional fill)", () => {
      const image = copyImage([
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ]);

      expect(floodFill(0, 0, image, 2)).toEqual([
        [2, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ]);
    });
  });

  describe("early return when source is already the new color", () => {
    it("returns the image unchanged when the source pixel matches newColor", () => {
      const image = copyImage([
        [2, 2, 0],
        [0, 2, 1],
      ]);

      const result = floodFill(0, 0, image, 2);

      expect(result).toEqual([
        [2, 2, 0],
        [0, 2, 1],
      ]);
    });
  });

  describe("minimal and boundary shapes", () => {
    it("handles a 1x1 image", () => {
      const image = copyImage([[7]]);

      expect(floodFill(0, 0, image, 9)).toEqual([[9]]);
    });

    it("handles a single-row image", () => {
      const image = copyImage([[1, 1, 0, 1]]);

      expect(floodFill(0, 0, image, 2)).toEqual([[2, 2, 0, 1]]);
    });

    it("handles a single-column image", () => {
      const image = copyImage([[1], [1], [0], [1]]);

      expect(floodFill(0, 0, image, 2)).toEqual([[2], [2], [0], [1]]);
    });

    it("works when the source is at a corner", () => {
      const image = copyImage([
        [1, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ]);

      expect(floodFill(0, 0, image, 3)).toEqual([
        [3, 3, 0],
        [3, 0, 0],
        [0, 0, 0],
      ]);
    });

    it("works when the source is on an edge", () => {
      const image = copyImage([
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ]);

      expect(floodFill(0, 1, image, 4)).toEqual([
        [0, 4, 4],
        [0, 4, 0],
        [0, 0, 0],
      ]);
    });
  });

  describe("return value and mutation", () => {
    it("mutates and returns the same image reference", () => {
      const image = copyImage([[1, 1], [0, 1]]);
      const result = floodFill(0, 0, image, 8);

      expect(result).toBe(image);
      expect(image).toEqual([
        [8, 8],
        [0, 8],
      ]);
    });
  });
});
