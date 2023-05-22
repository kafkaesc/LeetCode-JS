/*
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

function threeSum(nums) {
	if (nums.length < 3) return null;

	// The triple map takes a key of [a, b, c] where a, b, c are distinct
	const tripletMap = new Map();

	// Array of triplets (number arrays size 3) that will be returned
	let zeroSumTriplets = [];

	function addToZeroSumTriplets(triplet) {
		if (!tripletMap.has(triplet.toString())) {
			tripletMap.set(triplet.toString(), true);
			zeroSumTriplets.push(triplet);
		}
	}

	function tripletMapHasTriplet(triplet) {
		return tripletMap.has(triplet.toString());
	}

	// Triplets will be ordered to have consistent keys in the tripletMap
	function orderTriplet(triplet) {
		return triplet.sort((a, b) => a - b);
	}

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (i !== j && i !== k && j !== k) {
					let ijkSet = orderTriplet([nums[i], nums[j], nums[k]]);
					if (nums[i] + nums[j] + nums[k] === 0) addToZeroSumTriplets(ijkSet);
				}
			}
		}
	}
	return zeroSumTriplets;
}

let solution = threeSum([0, 1, 1]);
console.log(solution);
