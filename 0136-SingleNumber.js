/*
https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except 
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

function singleNumber(nums) {
	if (nums.length === 1) return nums[0];

	// Because we know all numbers exclusively appear twice or once, we can
	// eliminate the key/value pair for a number as soon as we fin the second
	// one. By the end of the array we should only have one key representing
	// the solo number.
	const numsMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		// If the map already has a key+true for the value, delete from map
		if (numsMap.has(nums[i])) {
			numsMap.delete(nums[i]);
		}
		// If the map does not have a key for that number, add K/V with true
		else {
			numsMap.set(nums[i], true);
		}
	}
	return numsMap.keys().next().value;
}
