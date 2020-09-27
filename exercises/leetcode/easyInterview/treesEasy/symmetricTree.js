/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

 

Follow up: Solve it both recursively and iteratively.
*/


var isSymmetric = function(root){

    if(root === null) return true;
    let q = [];
    
    q.push(root);
    
    while(q.length > 0 ){

        let qFront = q.shift();
        let lNode = qFront.left;
        let rNode = qFront.right;
        
        
        if(!lNode && !rNode) continue;
        if(lNode.val !== rNode.val) return false;
        if(!lNode || !rNode) return false;
        
        if(lNode.left) q.push(lNode.left);
        if(rNode.right) q.push(rNode.right);
        if(lNode.right) q.push(lNode.right);
        if(rNode.left) q.push(rNode.left);
    }
    
    return true;
}

module.exports = isSymmetric;