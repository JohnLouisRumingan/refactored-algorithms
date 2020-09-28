const containsNearbyAlmostDuplicate = require("./containsDuplicate")
const wordPattern = require("./wordPattern")
const sumRootToLeaf = require("./sumRootToLeafBinary")
const compareVersion = require("./compareVersionNumbers")
const getHint = require("./bullsAndCows");
const maxProduct = require('./maxProductSubarray');
const lastWord = require('./lengthLastWord');
const gasStation = require('./gasStation');
const subLessK = require('./subarrayProduct')

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

test('maxProductSubarray returns the provided test cases', () => {
    expect(maxProduct([2,3,-2,4])).toBe(6);
    expect(maxProduct([-2,0,-1])).toBe(0);
})

test('when lastWord is given "Hello World" it should return 5', () => {
    expect(lastWord("Hello world")).toBe(5);
})

test('when lastWord is given multiple spaces, it should return the correct count', () => {
    expect(lastWord("a   b    ")).toBe(1);
    expect(lastWord("a   b    ")).not.toBe(0);
    expect(lastWord("  ")).toBe(0);
    expect(lastWord("  a  ")).toBe(1);
})

test('when gasStation is given gas  = [1,2,3,4,5], cost = [3,4,5,1,2] it returns 3', () => {
    expect(gasStation([1,2,3,4,5], [3,4,5,1,2])).toBe(3);
})

test('when gasStation is given gas  = [2,3,4], cost = [3,4,3] it returns -1', () => {
    expect(gasStation([2,3,4], [3,4,3])).toBe(-1);
})

test('when subarrayProductLessThanK is given nums = [10, 5, 2, 6], k = 100 it should return 8', () => {
    expect(subLessK([10,5,2,6], 100)).toBe(8);
})


// test('when getHint is given ""43800797115925613013", "60371817651755202260", it returns "2A12B"', () => {
//     expect(getHint("43800797115925613013", "60371817651755202260")).toBe("2A12B")
// })