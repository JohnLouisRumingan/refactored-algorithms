/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//  using dummyNode with null pointers

// var dummyNode = function(val){
//     let newNode = new TreeNode();
//     newNode.val = val;
//     newNode.left = newNode.right = null;
//     return newNode;
// }

// binary depth first search
// time complexity O(n)
// space complexity:
/*
Extra space required is likely to be more wrt breadth/level search if tree is balanced and likely to be more wrt depth first
if tree is less balanced.
*/

var isValidBST = function(root, min = null, max=null) {
    
    if(!root) return true;
    
    if(max !== null && root.val >= max) return false;
    if(min !== null && root.val <= min) return false;
    
    const lNode = isValidBST(root.left, min, root.val);
    const rNode = isValidBST(root.right, root.val, max);
    
    return (lNode && rNode);
};


module.exports = isValidBST;