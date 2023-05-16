/*
Given the root of a binary tree, check whether it is a mirror of itself \
(i.e., symmetric around its center).

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

// This recursive function is passed two trees, which are sub-trees from the
// previous nodes left and right trees.
function leafRecursion(leftTree, rightTree) {
	// Base case: both trees are null, which means
	// the function was called by a leaf
	if (!leftTree && !rightTree) return true;

	// If one is null and one is not, the tree is asymmetric
	if (!leftTree || !rightTree) return false;

	// If the values for L/R do not match, the tree is asymmetric
	if (leftTree.val !== rightTree.val) return false;

	const outsideTree = leafRecursion(leftTree.left, rightTree.right);
	const insideTree = leafRecursion(leftTree.right, rightTree.left);

	// If the child trees are symmetric then the current tree is too
	return outsideTree && insideTree;
}

function isSymmetric(root) {
	return leafRecursion(root.left, root.right);
}
