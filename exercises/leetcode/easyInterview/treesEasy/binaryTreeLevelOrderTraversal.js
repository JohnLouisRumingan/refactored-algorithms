/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */

// breadth first traversal 
// time complexity O(n) when visiting all nodes once
// auxiliary space complexity higher when balanced 

var levelOrder = function(root) {

    if(root === null) return [];
    
    let startLevel = 0;
    let levelMap = new Map();
    let q = [];

    let maxLevel = 0;

    q.push([root, startLevel]);

    while(q.length > 0){

        let qFront = q.shift();
        let node = qFront[0];
        let level = qFront[1];

        maxLevel = Math.max(maxLevel, level);

        let arr = [];
        if(levelMap.has(level)){
            arr = levelMap.get(level);
        }
        arr.push(node.val);
        levelMap.set(level, arr);

        if(node.left !== null){q.push([node.left, level+1]);}
        if(node.right !== null){q.push([node.right, level+1]);}
    }

    let traversal = [];
    for(let i=0; i<=maxLevel; i++){
        let tempArr = levelMap.get(i);
        traversal.push(tempArr);
    }

    return traversal;
};

module.exports = levelOrder;