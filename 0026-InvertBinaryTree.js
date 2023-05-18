/*
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

function invertChildren(node) {
	// We have reached a leaf
	if (!node) return null;

	// Create the new, reversed children
	const newLeft = invertChildren(node.right);
	const newRight = invertChildren(node.left);

	// Reverse the children and return
	node.left = newLeft;
	node.right = newRight;
	return node;
}

// By invert this problem means converting the
// binary tree into its mirrored self
function invertTree(root) {
	return invertChildren(root);
}
