/*
https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a
cycle in it.

There is a cycle in a linked list if there is some node in the list that can 
be reached again by continuously following the next pointer. Internally, pos 
is used to denote the index of the node that tail's next pointer is 
connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function hasCycle(head) {
	// No linked list means no circuit exists.
	if (!head) {
		return false;
	}
	// The runner will start a node ahead of the walker and "runs" through the
	// linked list faster than the walker "walks". If they ever run into each
	// other on a node we know there is a circuit because the walker cannot
	// catch up to the runner.
	let runner = head.next;
	let walker = head;

	while (runner !== null && walker !== null) {
		if (runner == walker) {
			return true;
		}
		runner = runner.next;
		if (runner == walker) {
			return true;
		}
		walker = walker.next;
		// Need to null check before calling next a second time in the same iteration
		if (runner && runner.next) runner = runner.next;
	}
	return false;
}
