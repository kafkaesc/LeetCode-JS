/*
https://leetcode.com/problems/majority-element/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

function majorityElement(nums) {
	// if length of nums is 1, quick return
	if (nums.length === 1) return nums[0];

	const majority = nums.length / 2;
	const countMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		// if number already exists in map, increment its count
		// if the number's new count is > n / 2, return the number as the solution
		if (countMap.has(nums[i])) {
			const newCount = countMap.get(nums[i]) + 1;
			if (newCount > majority) return nums[i];
			countMap.set(nums[i], newCount);
		}
		// if the number isn't in the map, add it with a count of 1
		else {
			countMap.set(nums[i], 1);
		}
	}

	// Problem constraints allow us to assume there will be a majority element,
	// we'll still return null (false) at the end of the function just in case
	return null;
}
