// ------------------------------------------------- DELETE DUPLICATES FROM SORTED LL -----------------------------------------------------
function deleteDuplicatesFromSortedLinkedList(head) {
    if (head === null) {
        return null;
    }
    let tempNode = head;
    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return tempNode;
}


// ------------------------------------------------- COMPPARING TWO LINKED LISTS -----------------------------------------------------
function CompareLists(llist1, llist2) {
    let len1 = 0;
    let len2 = 0;
    while (llist1 && llist2) {
        if (llist1.data !== llist2.data) {
            return 0;
        }
        if (llist1.next !== null) {
            len1++;
        }
        if (llist2.next !== null) {
            len2++;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }

    if (len1 !== len2) {
        return 0;
    }

    // Instead of counting lengths we can check whether both the list have reached the tail
    // if(llist1 || llist2 ) {
    //     return 0;
    // }

    return 1;
}

// ------------------------------------------------- REMOVE ELEMENTS -----------------------------------------------------

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

// ------------------------------------------------- MERGE TWO SORTED LINKED LISTS -----------------------------------------------------

function mergeTwoSortedLinkedLists(head1, head2) {
    let dummyNode = new Node(0);
    let currentNode = dummyNode;

    while (head1 && head2) {
        if (head1.value <= head2.value) {
            currentNode.next = head1;
            head1 = head1.next;
        } else {
            currentNode.next = head2;
            head2 = head2.next;
        }
        currentNode = currentNode.next;
    }

    if (head1) {
        currentNode.next = head1;
    }
    if (head2) {
        currentNode.next = head2;
    }

    return dummyNode.next;
}


// ------------------------------------------------- GET NODE FROM TAIL's POSITION -----------------------------------------------------
/**
 * Summary of the "Gap" Principle:
 * The key idea is that once fastPointer is k steps ahead of slowPointer (where k = positionFromTail), 
 * this relative distance is maintained as both pointers move at the same speed. 
 * When fastPointer eventually hits the end of the list (i.e., its next is null), 
 * slowPointer will naturally be k steps behind fastPointer's current position, which means k steps from the end of the list.
 */

function getNode(llist, positionFromTail) {
    if (!llist) {
        return null;
    }

    let slowPointer = llist;
    let fastPointer = llist;

    for (let i = 0; i < positionFromTail; i++) {
        if (fastPointer.next === null) {
            return null;
        }
        fastPointer = fastPointer.next;
    }

    while (fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    return slowPointer.data;
}

// ------------------------------------------------- FIND IF CYCLE EXISTS & FIND THE CYCLE STARTER -----------------------------------------------------

// Using Floyds Hare & Tortoise Algorithm.
function hasCycle(head) {
    let temp = head;
    let slow = temp;
    let fast = temp;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
          if(slow == fast) {
               return true;
        }
    }
     return false;
}

// Once the loop is detected then continue for finding the cycle starter.
// Once the loop is detected indicates that fast and slow pointers have collided once.
// Once they collided, assing slow to head again and let the fast be at previous collision point.
// Then move slow and fast pointers 1 step each time.
// They will again collide at some point. That collision point is the starter of the cycle.

// ------------------------------------------------- FIND MERGING NODE -----------------------------------------------------
// find the merging node of two linkedlists
// Start temp1 at head1 and traverse until null, once null assign it to head2. Do similar for temp2 and head2.
// At some point they will meet and if both are null it returns null
function findMergeNode(headA, headB) {
    let tempA = headA;
    let tempB = headB;
    if(tempA && tempB) {
        while(tempA !== tempB) {
            tempA = tempA.next;
            tempB = tempB.next;
            if(tempA == tempB) return tempA.data;
            if(tempA == null) tempA = headB;
            if(tempB == null) tempB = headA;
        }
        return tempA.data;
    } else {
        return null;
    }
}

// ------------------------------------------------- PALINDROME -----------------------------------------------------
function isPalindrome(head) {
    // TO DO
    if(head) {
    let slow = head;
    let fast = head;
    
    // 1 -> 2 -> 3 -> 3 -> 2 -> 2 -> null  => Here first 3 is m1.
    // 1 -> 2 -> 3 -> 2 -> 1 -> null  => Here 3 is m1
    
    // Find the middle m1
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    

    // reverse the second half from slow.next
    let newHead = reverse(slow.next);
    let first = head;
    let second = newHead;

    // compare each node and check for palindrome
    while(second) {
        if(first.val !== second.val) {
            reverse(newHead);
            return false;
        }
        first = first.next;
        second = second.next;
    }
    reverse(newHead);
    return true;
    } else {
        return false;
    }
}

function reverse(head) {
    let prev = null;
    let current = head;
    let next = null;
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}