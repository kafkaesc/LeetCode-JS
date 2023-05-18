/*
https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

function moveZeroes(nums) {
	// Quick returns for performance
	if (nums.length === 1) return nums;
	if (nums.length === 2 && nums[1] === 0) return nums;

	// Iterate through nums, counting and removing zeroes as they are encountered
	let zeroCount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			zeroCount++;
			// The index needs to step backward after splicing away a zero
			i--;
		}
	}

	// Afterward use the zero count to push all removed zeroes back onto nums
	for (let i = 0; i < zeroCount; i++) nums.push(0);
	return nums;
}

let input = [0, 0, 1];
let result = moveZeroes(input);
console.log('result: ', result);
