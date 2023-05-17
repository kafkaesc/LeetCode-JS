/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

function diveDown(node, prevDepth) {
	// If left and right are both null, we've reached a leaf,
	// so return prevDepth + 1
	if (!node.left && !node.right) return prevDepth + 1;

	// If either left or right are not null, call diveDown on
	// that node with +1 added to prevDepth to make it current
	let leftDepth = 0;
	let rightDepth = 0;
	if (node.left) leftDepth = diveDown(node.left, prevDepth + 1);
	if (node.right) rightDepth = diveDown(node.right, prevDepth + 1);

	// Return whichever depth is greater between left and right
	return leftDepth > rightDepth ? leftDepth : rightDepth;
}

function maxDepth(root) {
	if (!root) return 0;
	return diveDown(root, 0);
}
