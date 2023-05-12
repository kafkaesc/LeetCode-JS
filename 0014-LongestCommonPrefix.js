/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string 
amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
*/

function longestCommonPrefix(strings) {
	// Return quick for some basic cases.
	// strings.length = 0 => there are no strings return ''
	// strings.length = 1 => there's only one string that matches itself as a tautology
	if (strings.length === 0) {
		return '';
	}
	if (strings.length === 1) {
		return strings[0];
	}

	// Find a common prefix from the first two strings, if one exists use that
	// to compare across the rest in the array
	let commonPrefix = '';
	for (let i = 0; i < strings[0].length && i < strings[1].length; i++) {
		if (strings[0][i] === strings[1][i]) {
			commonPrefix += strings[0][i];
		} else {
			break;
		}
	}

	// Break out of the nested loop once the prefix chars are no longer matching.
	// Stop looping if the common prefix is an empty string, meaning non exists.
	// These steps will eliminate unnecessary looping through data.
	for (let i = 2; i < strings.length && commonPrefix.length > 0; i++) {
		let subPrefix = '';
		for (let j = 0; j < strings[i].length && j < commonPrefix.length; j++) {
			if (commonPrefix[j] === strings[i][j]) {
				subPrefix += commonPrefix[j];
			} else {
				break;
			}
		}
		if (subPrefix.length < commonPrefix.length) {
			commonPrefix = subPrefix;
		}
	}
	return commonPrefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
