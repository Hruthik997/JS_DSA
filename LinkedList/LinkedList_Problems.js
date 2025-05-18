function deleteDuplicatesFromSortedLinkedList(head) {
    // TO DO
    if(head === null) {
        return null;
    }
    let tempNode = head; 
    while(head && head.next) {
        if(head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    
    return tempNode;
}

function CompareLists(llist1, llist2) {
    // TO DO
    let len1 = 0;
    let len2 = 0;
    while(llist1 && llist2) {
        if(llist1.data !== llist2.data) {
            return 0;
        }
        if(llist1.next !== null) {
            len1++;
        }
        if(llist2.next !== null) {
            len2++;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    
    if(len1 !== len2) {
        return 0;
    }

    // Instead of counting lengths we can check whether both the list have reached the tail
    // if(llist1 || llist2 ) {
    //     return 0;
    // }
    
    return 1;
}


function removeElements(head, val) {
    let sentinel = new ListNode(0, head); // Sentinel node to simplify edge cases
    let current = sentinel;
 
    while (current) {
        while (current.next && current.next.val === val) {
            current.next = current.next.next; // Remove the node
        }
        current = current.next; // Move to the next node
    }
 
    return sentinel.next; // Return the updated list, skipping the sentinel node
}

// Try with your own approach also