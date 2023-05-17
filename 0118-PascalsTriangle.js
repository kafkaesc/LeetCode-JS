/*
https://leetcode.com/problems/pascals-triangle/

Given an integer numRows, return the first numRows of Pascal's triangle.

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Constraints:

1 <= numRows <= 30
*/

function generate(numRows) {
	// Basic Pascal triangle cases for quick returns. This function needs at
	// least the first row seeded in order for the loop to calculate new rows
	// based on the previous.
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];
	if (numRows === 2) return [[1], [1, 1]];
	if (numRows === 3) return [[1], [1, 1], [1, 2, 1]];

	// If we're asked to construct a larger Pascal triangle we start at 3
	// and iterate forward from there. We only calculate the values of
	// interior indexes because twe know the triangle edges will all be 1.
	let pascalArray = [];
	if (numRows > 3) {
		pascalArray = [[1], [1, 1], [1, 2, 1]];
		for (let i = 3; i < numRows; i++) {
			let newRow = [1];
			for (let j = 1; j < i; j++) {
				newRow.push(pascalArray[i - 1][j - 1] + pascalArray[i - 1][j]);
			}
			newRow.push(1);
			pascalArray.push(newRow);
		}
	}
	return pascalArray;
}

const output = generate(5);
console.log(output);
