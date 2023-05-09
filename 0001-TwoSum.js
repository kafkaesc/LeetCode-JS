/*
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

You can return the answer in any order.
*/

function twoSums(nums, target) {
	// Run a quick O(N) scan for a quick answer
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] === target) return [i, i + 1];
		if (nums[i] + nums[i + 2] === target) return [i, i + 2];
		if (nums[i] + nums[i + 3] === target) return [i, i + 3];
		if (nums[i] + nums[i + 4] === target) return [i, i + 4];
	}

	// Run a nested O(N^2) loop for an exhaustive scan for the correct pair.
	// To improve performance the loops will not go from 0 to length. They will
	// index using leader and follower, with the follower always starting one
	// behind the leader. This prevents indexes from being unnecessarily double
	// checked, e.g., checking [2] + [1] when [1] + [2] was already tested in
	// the first outer loop.
	for (let leader = 1; leader < nums.length; leader++) {
		for (let follower = leader - 1; follower < nums.length; follower++) {
			if (nums[leader] + nums[follower] === target) {
				return [follower, leader];
			}
		}
	}
	return null;
}

const myNums = [2, 7, 11, 15];
const myTarget = 9;
console.log(twoSums(myNums, myTarget));
