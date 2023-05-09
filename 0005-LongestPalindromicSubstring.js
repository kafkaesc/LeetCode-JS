/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

function longestPalindrome(s) {
	if (s.length < 2) return s;

	let longestPalindrome = s[0];
	let lpLength = longestPalindrome.length;

	for (let i = 0; i < s.length; i++) {
		for (let j = i + lpLength; j < s.length; j++) {
			if (i !== j - 1 && s[i] === s[j - 1]) {
				let a = s.slice(i, j);
				let b = a.split('').reverse().join('');
				if (a === b && a.length > lpLength) {
					lpLength = a.length;
					longestPalindrome = a;
				}
			}
		}
	}

	return longestPalindrome;
}

const input = 'babad';
console.log(longestPalindrome(input));
