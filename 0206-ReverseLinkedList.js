/*
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and 
return the reversed list.

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function reverseList(head) {
	let stepper = head;
	let prev = null;
	let temp = null;

	while (stepper) {
		// Save a copy of next before overwriting the stepper
		temp = stepper.next;

		// Flip the direction for the current node
		stepper.next = prev;

		// Step into the next node
		prev = stepper;
		stepper = temp;
	}
	return prev;
}
