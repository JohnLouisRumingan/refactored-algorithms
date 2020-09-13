const containsNearbyAlmostDuplicate = require("./containsDuplicate")
const wordPattern = require("./wordPattern")
const sumRootToLeaf = require("./sumRootToLeafBinary")
const compareVersion = require("./compareVersionNumbers")
const getHint = require("./bullsAndCows");

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

test('when containsDuplicate is given [1,2,2,3,4,5] k=3 t=0 it should return true', () => {
    expect(containsNearbyAlmostDuplicate([1,2,2,3,4,5], 3, 0)).toBe(true);
});


test('when wordPattern is given "abba" and "dog cat cat dog" it returns true',() => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
})

test('when wordPattern is given duplicate words or patterns that are not bijections it returns false', () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
    expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
    expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
})

test('when sumRootToLeaf is given [1,0,1,0,1,0,1] it should return 22', ()=> {
    let treeRoot = new TreeNode(1);
    let tree01L = new TreeNode(0);
    let tree01R = new TreeNode(1);
    let tree10L = new TreeNode(0);
    let tree11R = new TreeNode(1);
    let tree20L = new TreeNode(0);
    let tree21R = new TreeNode(1);
    
    treeRoot.left = tree01L;
    treeRoot.right = tree01R;
    tree01L.left = tree10L;
    tree01L.right = tree11R;
    tree01R.left = tree20L;
    tree01R.right = tree21R;

    expect(sumRootToLeaf(treeRoot)).toBe(22);
})

test('when compareVersion is given 0.1 and 1.1 it returns -1', () =>{
    expect(compareVersion("0.1", "1.1")).toBe(-1);
})

test('when compareVersion is given 1.0.1 and 1 it returns 1', () =>{
    expect(compareVersion("1.0.1", "1")).toBe(1);
})

test('when compareVersion is given 7.5.2.4 and 7.5.3 it returns -1', () =>{
    expect(compareVersion("7.5.2.4", "7.5.3")).toBe(-1);
})

test('when compareVersion is given 1.01 and 1.001 it returns 0', () =>{
    expect(compareVersion("1.01", "1.001")).toBe(0);
})

test('when compareVersion is given 1.0 and 1.0.0 it returns 0', () =>{
    expect(compareVersion("1.0", "1.0.0")).toBe(0);
})

// test('when getHint is given ""43800797115925613013", "60371817651755202260", it returns "2A12B"', () => {
//     expect(getHint("43800797115925613013", "60371817651755202260")).toBe("2A12B")
// })