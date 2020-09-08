/*
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

 

Example 1:

Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    
    if(root === null) return;
    
    let routes = []; // we will track all routes here;
    
    nodeTracker(root, routes);
    let sum = 0;   
    routes.forEach(value => (sum +=parseInt(value, 2)))
    console.log(routes)
    
    return sum;
};

function nodeTracker(node, routes, currentRoute=""){
    
    if(!node.left && !node.right){
        currentRoute += node.val;
        routes.push(currentRoute);
        return;
    }
    
    currentRoute += node.val;
    
    if(node.left) {nodeTracker(node.left, routes, currentRoute);}
    if(node.right){nodeTracker(node.right, routes, currentRoute);}
}


module.exports = sumRootToLeaf;