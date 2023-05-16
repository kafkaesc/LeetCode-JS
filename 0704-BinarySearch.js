/*
https://leetcode.com/problems/binary-search/description/

Given an array of integers, nums, which is sorted in ascending order, and an 
integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

function search(nums, target) {
	// First check if the number is less than the first index or 
	// greater than the last index. Quick answer in either case.
	if (target < nums[0]) return -1;
	if (target > nums[nums.length - 1]) return -1;

	// If the array is length 1 we are just comparing target with a
	// single value. Another quick answer.
	if (nums.length === 1 && nums[0] === target) return 0;
	if (nums.length === 1 && nums[0] !== target) return -1;

	// If we have a longer array, execute a binary search and cut the
	// searchable area in half each step in order to maintain O(log n)
	// time in the worst case scenario.
	let floor = 0;
	let ceiling = nums.length;
	let pos = Math.floor(nums.length / 2);
	while (floor <= ceiling) {
		if (nums[pos] === target) return pos;
		if (nums[pos] < target) floor = pos + 1;
		if (nums[pos] > target) ceiling = pos - 1;

		pos = Math.floor((floor + ceiling) / 2);
	}
	return -1;
}
