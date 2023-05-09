/*
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a 
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does 
  not have leading zeros.

Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
	let num1 = '';
	let stepper1 = l1;
	let num2 = '';
	let stepper2 = l2;

	// Exhaust both linked lists while prepending their values onto a string
	while (stepper1 !== null && stepper2 !== null) {
		if (stepper1 !== null) {
			num1 = stepper1.val + '' + num1;
			stepper1 = stepper1.next;
		}
		if (stepper2 !== null) {
			num2 = stepper2.val + '' + num2;
			stepper2 = stepper2.next;
		}
	}

	// Parse both generated strings back to numbers, find their sum,
	// and then split that into per digit into an array of strings
	let sumArray = ('' + (BigInt(num1) + BigInt(num2))).split('');

	let sumList = new ListNode(0);
	let sumStepper = sumList;

	// Push the number values onto a new linked list, backward from the sumArray
	for (let i = sumArray.length; i >= 0; i--) {
		sumStepper.next = new ListNode(sumArray[i]);
		sumStepper = sumStepper.next;
	}

	// Return one step in to skip the initial 0 node
	return sumList.next;
}

let list1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
let list2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
console.log(addTwoNumbers(list1, list2));
