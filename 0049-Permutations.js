/*
https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations.
You can return the answer in any order.

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Input: nums = [1]
Output: [[1]]

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

function permute(nums) {
	if (nums.length === 1) return [nums];
	if (nums.length === 2)
		return [
			[nums[0], nums[1]],
			[nums[1], nums[0]],
		];

	let permutations = [];
	for (let i = 0; i < nums.length; i++) {
		let newPermutation = [...nums];
		newPermutation.splice(i, 1);
		newPermutation = permute(newPermutation);
		for (let j = 0; j < newPermutation.length; j++) {
			permutations.push([nums[i], ...newPermutation[j]]);
		}
	}
	return permutations;
}
