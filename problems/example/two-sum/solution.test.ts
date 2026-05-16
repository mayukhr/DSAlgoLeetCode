import { describe, expect, it } from "vitest";
import { twoSum } from "./solution.js";

function assertValidPair(nums: number[], target: number, pair: number[]) {
  expect(pair).toHaveLength(2);
  const [i, j] = pair;
  expect(i).not.toBe(j);
  expect(i).toBeGreaterThanOrEqual(0);
  expect(j).toBeGreaterThanOrEqual(0);
  expect(i).toBeLessThan(nums.length);
  expect(j).toBeLessThan(nums.length);
  expect(nums[i]! + nums[j]!).toBe(target);
}

describe("twoSum", () => {
  it("finds the pair in a small array", () => {
    const nums = [2, 7, 11, 15];
    const result = twoSum(nums, 9);
    assertValidPair(nums, 9, result);
  });

  it("handles duplicate values used as different indices", () => {
    const nums = [3, 3];
    const result = twoSum(nums, 6);
    assertValidPair(nums, 6, result);
    expect(new Set(result).size).toBe(2);
  });

  it("handles negative numbers and target zero", () => {
    const nums = [-1, 0, 1, 2];
    const result = twoSum(nums, 0);
    assertValidPair(nums, 0, result);
  });

  it("handles all-negative inputs", () => {
    const nums = [-3, -1, -4];
    const result = twoSum(nums, -7);
    assertValidPair(nums, -7, result);
  });

  it("works when the answer uses the first and last index", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = twoSum(nums, 6);
    assertValidPair(nums, 6, result);
  });

  it("works with exactly two elements", () => {
    const nums = [1, 2];
    const result = twoSum(nums, 3);
    assertValidPair(nums, 3, result);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  it("does not reuse the same index twice when values repeat", () => {
    const nums = [1, 1, 1, 1];
    const result = twoSum(nums, 2);
    assertValidPair(nums, 2, result);
    expect(result[0]).not.toBe(result[1]);
  });

  it("handles larger values without overflow in the check", () => {
    const nums = [1_000_000_000, 2_000_000_000, -1_000_000_000];
    const result = twoSum(nums, 1_000_000_000);
    assertValidPair(nums, 1_000_000_000, result);
  });
});
