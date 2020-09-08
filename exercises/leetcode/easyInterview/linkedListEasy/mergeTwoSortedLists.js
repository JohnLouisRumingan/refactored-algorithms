/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made 
by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    //     dummy node
        var l3 = new ListNode(null, null);
        var prev = l3;
        
        while(l1 !== null && l2 !== null){
            if(l1.val < l2.val){
                prev.next = l1;
                l1 = l1.next;
            }
    //         previously had this as an else if with separate = statement but it doesn't matter due to ordered list
            else{
                prev.next = l2;
                l2 = l2.next;
            }
            
            prev = prev.next;
        }
        
    //     once one list is null, we know that because the list is sorted, we can append the other list
        if(l1 === null){prev.next = l2;}
        if(l2 === null){prev.next = l1;}
        
    //     return next so as to not include the dummy node
        return l3.next; 
    };