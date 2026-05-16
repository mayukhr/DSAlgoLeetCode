/**
 * Two Sum (LeetCode 1)
 * Given an array of integers nums and an integer target, return indices i, j
 * (i !== j) such that nums[i] + nums[j] === target. Exactly one solution exists.
 * Implement your solution below.
 */
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
