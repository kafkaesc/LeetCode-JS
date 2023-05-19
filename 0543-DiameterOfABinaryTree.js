/*
https://leetcode.com/problems/diameter-of-binary-tree/

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two
nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges
between them.

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
*/

function diameterOfBinaryTree(root) {
	if (!root) return 0;

	let largestDiameter = 0;

	function deepestPath(node, currentDepth) {
		// We have reached a leaf
		if (!node) return currentDepth;

		// Call deepest path left and right and then
		// return whichever one goes deeper
		const leftDepth = deepestPath(node.left, currentDepth);
		const rightDepth = deepestPath(node.right, currentDepth);

		// Check the diameter of sub-tree and if one is larger,
		// update largestDiameter
		if (leftDepth + rightDepth > largestDiameter)
			largestDiameter = leftDepth + rightDepth;

		return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
	}

	const leftDepth = deepestPath(root.left, 0);
	const rightDepth = deepestPath(root.right, 0);
	return leftDepth + rightDepth > largestDiameter
		? leftDepth + rightDepth
		: largestDiameter;
}
