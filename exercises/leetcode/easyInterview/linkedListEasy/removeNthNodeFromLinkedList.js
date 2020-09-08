/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;
    
//     use two pointer technique with a gap of n nodes between them
    let first = dummy;
    let second = dummy;
    
//     advance the first pointer until it reaches n steps. n+1 needed because starting from 1
    for(let i=1; i<=n+1; i++){
        first = first.next;
    }
    
//     advance both pointers in tandem now
    while (first != null){
        first = first.next;
        second = second.next;
        
    }

    // could also declare a counter after line 38, then use an if/then with the counter to advance the second pointer
    // 
    
//     now second.next will just point to the second next node, skipping the "deleted" node
    second.next = second.next.next;
    
    
    return dummy.next; //dummy.next still useful to point to head
};