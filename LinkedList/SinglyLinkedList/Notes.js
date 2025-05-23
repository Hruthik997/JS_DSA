// *** ANALOGIES ***
// Circular Single Linked List -> Traversing through players in Ludo Game
// Double Linked List -> Music player with option to play previous and next songs
// Circular Double Linked List -> Switching through tabs in Computer


class Node {   // O(1) O(1)
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    // Empty Linked List
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Linked list with one node
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    toString() {
        let tempNode = this.head
        let result = ''
        while (tempNode !== null) {
            result += tempNode.value
            if (tempNode.next !== null) {
                result += ' -> '
            }
            tempNode = tempNode.next
        }
        return result
    }

    append(value) {  // O(1) O(1)
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    prepend(value) {  // O(1) O(1)
        const newNode = new Node(value)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    insert(value, index) {   // O(N) O(1)
        const newNode = new Node(value)
        if (index < -1 || index > this.length) {
            return false;
        } else if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else if (index === - 1 || index === this.length) {
            this.tail.next = newNode
            this.tail = newNode

        } else {
            let tempNode = this.head
            for (let i = 0; i < index - 1; i++) {
                tempNode = tempNode.next
            }
            newNode.next = tempNode.next
            tempNode.next = newNode
        }
        this.length++
        return true

    }

    traverse() {  // O(N) O(1)
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }

    search(target) {   // O(N) O(1)
        let current = this.head
        let index = 0
        while (current !== null) {
            if (current.value === target) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }


    get(index) {   // O(N) O(1)
        if (index === -1) {
            return this.tail
        } else if (index < -1 || index >= this.length) {
            return null
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    setValue(index, value) {   // O(N) O(1)
        const node = this.get(index)
        if (node) {
            node.value = value
            return true
        }
        return false
    }

    popFirst() {       // O(1) O(1)
        if (this.length === 0) {
            return null
        }
        const poppedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }

    pop() {     // O(N) O(1)
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let temp = this.head
            while (temp.next !== this.tail) {
                temp = temp.next
            }
            this.tail = temp
            temp.next = null
        }

        this.length--
        return poppedNode
    }

    remove(index) {   // O(N) O(1)
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index === 0) {
            return this.popFirst()
        }
        if (index === this.length - 1) {
            return this.pop()
        }
        const prevNode = this.get(index - 1)
        const poppedNode = prevNode.next
        prevNode.next = poppedNode.next
        poppedNode.next = null
        this.length--
        return poppedNode
    }

    deleteAll() {   // O(1) O(1)
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Floyds Hare & Tortoise Algorithm to find Middle value
    // Slow runs at 1 node per loop and fast runs at 2 nodes per loop, Effectively slow being middle once the loop completes.
    findMiddleValue() {  // O(N) O(1)
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.value);
    }


    /*
    Remember to follow steps in same order
    Reverse a linked list using three pointers namely prev, current & next
    update next to current.next to not loose the address of remaining linked list
    update current.next to prev (This is the step where you are reversing the links)
    update prev to current
    update current to next
    Follow same procedure until current is not equal to null 
    */
    reverse() {  // O(N) O(1)
        if (this.head) {
            let prev = null;
            let current = this.head;
            let next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        } else {
            return null;
        }

    }
}

let newLinkedList = new LinkedList()
newLinkedList.append(10)
newLinkedList.append(20)
newLinkedList.append(30)
newLinkedList.append(40)
newLinkedList.deleteAll()

newLinkedList.toString()




