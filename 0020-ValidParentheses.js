/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/

class OpenerStack {
	constructor() {
		this.__stack = [];
	}

	peek() {
		return this.__stack[this.__stack.length - 1];
	}

	pop() {
		return this.__stack.pop();
	}

	print() {
		console.log(this.__stack);
	}

	push(st) {
		if (st !== '{' && st !== '[' && st !== '(') {
			console.error('Non-opening character passed to OpenerStack');
			return;
		}
		this.__stack.push(st);
	}
}

function isMatchingParens(a, b) {
	if (a === '(' && b === ')') {
		return true;
	}
	if (a === '{' && b === '}') {
		return true;
	}
	if (a === '[' && b === ']') {
		return true;
	} else {
		return false;
	}
}

// Note: This solution is robust enough that it will work with strings using
// non-parens characters, i.e., you can check if the parens of this
// [aa(bb{ccc})] are valid in their nesting.
function isValid(st) {
	let openers = new OpenerStack();
	for (let i = 0; i < st.length; i++) {
		// As we encounter opening characters, push them onto the stack
		if (st[i] === '{' || st[i] === '[' || st[i] === '(') {
			openers.push(st[i]);
		}
		// As we encounter closing characters, ensure they match the
		// most recent opener
		else if (st[i] === '}' || st[i] === ']' || st[i] === ')') {
			if (!openers.peek()) {
				return false;
			} else if (isMatchingParens(openers.peek(), st[i])) {
				openers.pop();
			} else {
				return false;
			}
		}
	}
	// If there are unclosed openers after going through the string, it's invalid
	if (openers.peek()) {
		return false;
	}
	return true;
}

console.log(isValid('[[[[]]'));
console.log(isValid('[{()}]'));
