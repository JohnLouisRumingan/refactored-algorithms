const maxDepth = require("./maxDepthOfBinaryTree")
const isValidBST = require("./validateBinarySearchTree")
const levelOrder = require("./binaryTreeLevelOrderTraversal")
const importSortedArrayToBST = require("./convertSortedArrayToBST")
const isSymmetric = require("./symmetricTree")

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const treeRoot = new TreeNode(3);
const tree9 = new TreeNode(9);
const tree20 = new TreeNode(20);
const tree15 = new TreeNode(15);
const tree7 = new TreeNode(7);

treeRoot.left = tree9;
treeRoot.right = tree20;
tree20.left = tree15;
tree20.right = tree7;

test('maxDepth of binary tree with values [3,9,20,null,null,15,7] expects return depth=3', () => {
    expect(maxDepth(treeRoot)).toBe(3);
});

test('validateBST of binary tree with values [3,9,20,null,null,15,7] should return false', () => {
    expect(isValidBST(treeRoot)).toBe(false);
});

test('validateBST of binary tree with values [2, 1, 3] should return true', () => {

    let treeRoot = new TreeNode(2);
    let tree1 = new TreeNode(1);
    let tree3 = new TreeNode(3);

    treeRoot.left = tree1;
    treeRoot.right = tree3;

    expect(isValidBST(treeRoot)).toBe(true);
});

test("levelOrder with values [3,9,20,null,null,15,7] should return [[3],[9,20],[15,7]]", () =>{
    expect(levelOrder(treeRoot)).toStrictEqual([[3],[9,20],[15,7]])
})

test("isSymmetric should return true when given [1,2,2,3,4,4,3] and false when given [1,2,2,null,3,null,3]", () => {

    let treeRoot = new TreeNode(1);
    let tree2L = new TreeNode(2);
    let tree2R = new TreeNode(2);
    let tree3L = new TreeNode(3);
    let tree4L = new TreeNode(4);
    let tree3R = new TreeNode(3);
    let tree4R = new TreeNode(4);

    treeRoot.left = tree2L;
    treeRoot.right = tree2R;
    tree2L.left = tree3L;
    tree2L.right = tree4L;
    tree2R.left = tree4R;
    tree2R.right = tree3R;

    expect(isSymmetric(treeRoot)).toBe(true);
})

// test("when importSortedArrayToBST is given [-10,-3,0,5,9] it should return [0,-3,9,-10,null,5]", () => {
    
//     let treeRoot = new TreeNode(0);
//     let treeNeg3 = new TreeNode(-3);
//     let treeNeg10 = new TreeNode(-10);
//     let tree9 = new TreeNode(9);
//     let tree5 = new TreeNode(5);

//     treeRoot.left = treeNeg3;
//     treeRoot.right = tree9;
//     treeNeg3.left = treeNeg10;
//     tree9.left = tree5;

//     expect(importSortedArrayToBST([-10, -3, 0, 5, 9])).toStrictEqual({"left": {"left": {"left": null, "right": null, "val": -10}, "right": null, "val": -3}, "right": {"left": {"left": null, "right": null, "val": 5}, "right": null, "val": 9}, "val": 0})
// })