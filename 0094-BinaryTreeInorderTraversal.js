/*
https://leetcode.com/problems/binary-tree-inorder-traversal/

Given the root of a binary tree, return the inorder traversal of 
its nodes' values.

Constraints:

The number of nodes in the tree is in the range [0, 100].

-100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

// Recursive function for steppign through the tree. It calls itself on the
// left value first, then stores its own value, then calls itself on the right
// value. Base case is when left and right are both null => we have reached
// a new leaf.
function inorderStep(node) {
	let st = '';
	if (node.left) st += inorderStep(node.left);
	st += node.val + ',';
	if (node.right) st += inorderStep(node.right);
	return st;
}

function inorderTraversal(root) {
	let inorderString = '';
	let node = root;
	if (node) {
		inorderString += inorderStep(node);
	}
	return inorderString
		.split(',')
		.filter((n) => n.length !== 0)
		.map((n) => (n = +n));
}
