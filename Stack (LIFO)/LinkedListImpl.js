// While using arrays for stack implementation, Always use from first.
// Because operations like inserting and deleting from ending are costly O(N) in linked lists.

class Node {
    constructor(value) {  // O(1)  O(1)
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {    // O(1)  O(1)
        this.top = null;
        this.length = 0;
    }

    constructor(value) {   // O(1)  O(1)
        let newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {   // O(1)  O(1)
        let newNode = new Node(value);
        if(this.length == 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {   // O(1)  O(1)
        if(this.length == 0) {
            return null;
        }
        let poppedNode = this.top;
        this.top = this.top.next;  // this.top = poppedNode.next;
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }

    peek() {   // O(1)  O(1)
        return this.top;
    }

    isEmpty() {   // O(1)  O(1)
        return this.length === 0;
    }

    clean() {   // O(1)  O(1)
        this.top = null;
        this.length = 0;
    }
}