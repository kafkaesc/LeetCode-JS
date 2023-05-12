/*
Given a sorted array of distinct integers and a target value, return the 
index if the target is found. If not, return the index where it would be 
if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

function searchInsert(nums, target) {
	// If nums is an empty array then the target would be inserted at [0]
	if (nums.length === 0) return 0;
	if (target < nums[0]) return 0;
	if (target > nums[nums.length - 1]) return nums.length;

	let floor = 0;
	let ceiling = nums.length - 1;
	let pos = Math.floor((floor + ceiling) / 2);

	// Standard binary search with a floor + ceiling reducing the search area 
	// of the array by half every time. Typical search functions will return 
	// false it the element isn't found, but for this spec we will return the 
	// ending position + 1 to return the index for inserting target.
	while (floor <= ceiling) {
		if (nums[pos] === target) return pos;
		else if (nums[pos] < target) floor = pos + 1;
		else if (nums[pos] > target) ceiling = pos - 1;

		pos = Math.floor((floor + ceiling) / 2);
	}
	return pos;
}

let input = [1, 3, 5, 6];
searchInsert(input, 2);
