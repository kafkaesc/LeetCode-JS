/*
Given a string s, find the length of the longest substring without 
repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
	// Quick return in the case of short strings
	if (s.length < 2) return s.length;

	let longestUnique = 1;
	let currentUnique = 1;
	let seen = new Map();
	let quitEarly = false;

	// Break s into an array of one character strings
	let sArray = s.split('');

	/* ba => back, an index that moves up one by one in the array
	 * fr => front, an index that moves ahead of b, testing if the
	 *       characters are still unique
	 *
	 * use a map to check if the character has been seen,
	 * if it hasn't then add it to the map, and increment currentUnique
	 * if it has already been seen then reset the current count and quit the loop
	 *
	 * if currentUnique is greater than longestUnique,
	 * set longestUnique to that value
	 */
	for (let ba = 0; ba < sArray.length; ba++) {
		seen.set(sArray[ba], true);
		quitEarly = false;
		for (let fr = ba + 1; fr < sArray.length && !quitEarly; fr++) {
			if (seen.get(sArray[fr])) {
				currentUnique = 0;
				quitEarly = true;
			} else {
				seen.set(sArray[fr], true);
				currentUnique++;
			}
			if (currentUnique > longestUnique) {
				longestUnique = currentUnique;
			}
		}
		seen = new Map();
		currentUnique = 1;
	}
	return longestUnique;
}

const input = 'abcabcbb';
console.log(lengthOfLongestSubstring(input));
