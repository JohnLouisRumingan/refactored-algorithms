/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Iterative version

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    //     traverse through linked list, storing the previous and current node until we reach the original null
        
        let current = head;
        
        if(!current) return current;
        
        let oldCurrentNext = head.next;
        current.next = null;
    //     while loops are great for linked lists since they hold no index like arrays for iteration
        
        while(oldCurrentNext){
            let temp = oldCurrentNext.next;
            oldCurrentNext.next = current;
            current = oldCurrentNext;
            oldCurrentNext = temp;
        }
        return current;
    };

    // space O(1) time O(n)