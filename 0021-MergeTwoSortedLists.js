/*
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing 
together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Constraints:

- The number of nodes in both lists is in the range [0, 50].
- 100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order.
*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
	let newList = new ListNode(0);
	let stepper = newList;
	let arr = [];
	while (list1 !== null || list2 !== null) {
		const a = list1?.val || null;
		const b = list2?.val || null;
		// First two if statements insert in the case where one of
		// the lists is already exhausted. The second two if statements
		// insert based on which item is lower. list1 wins ties, but ties
		// don't change the final result because they're identical!
		if (!list1 && list2) {
			arr.push(b);
			stepper.next = new ListNode(b);
			stepper = stepper.next;
			list2 = list2.next;
		} else if (!list2 && list1) {
			arr.push(a);
			stepper.next = new ListNode(a);
			stepper = stepper.next;
			list1 = list1.next;
		} else if (a <= b) {
			arr.push(a);
			stepper.next = new ListNode(a);
			stepper = stepper.next;
			list1 = list1.next;
		} else if (a > b) {
			arr.push(b);
			stepper.next = new ListNode(b);
			stepper = stepper.next;
			list2 = list2.next;
		}
	}
	return newList.next;
}

function printList(list) {
	let st = '[';
	while (list !== null) {
		st += list.val + ',';
		list = list.next;
	}
	console.log(st + ']');
}

const input1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const input2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
printList(mergeTwoLists(input1, input2));
