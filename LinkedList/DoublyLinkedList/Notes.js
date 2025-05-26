class Node {
    constructor(value) {    // O(1) O(1)
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    // constructor(value) {   // O(1) O(1)
    //     let newNode = new Node(value);
    //     this.head = newNode;
    //     this.tail = newNode;
    //     this.length = 1;
    // }

    constructor() {   // O(1) O(1)
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        let temp = this.head;
        let res = '';
        while (temp != null) {
            res += temp.value;
            if (temp.next !== null) {
                res += ' <-> '
            }
            temp = temp.next;
        }
        return res;
    }

    append(value) {   // O(1) O(1)
        const newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {  // O(1) O(1)
        const newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    traversal() {    // O(N) O(1)
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    reverse_traversal() {   // O(N) O(1)
        let lastNode = this.tail;
        while (lastNode) {
            console.log(lastNode.value);
            lastNode = lastNode.prev;
        }
    }

    search(target) {   // O(N) O(1)
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === target) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    get(index) {     // O(N) O(1)
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode;
        if (index < Math.floor(this.length / 2)) {
            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    set(index, value) {   // O(N) O(1)
        let temp = get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {   // O(N) O(1)
        let newNode = new Node(value);
        if (index == 0) {
            this.prepend(value);
        } else if (index == this.length - 1) {
            this.append(value);
        } else {
            let temp = this.get(index - 1);
            if (temp) {
                newNode.next = temp.next;
                newNode.prev = temp;
                temp.next.prev = newNode;
                temp.next = newNode;
            } else {
                return false;
            }
        }
        this.length++;
        return true;
    }

    popFirst() {  // O(1) O(1)
        let poppedNode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    pop() {   // O(1) O(1)
        let poppedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    remove(index) {   // O(N) O(1)
        if (index == 0) {
            return this.popFirst();
        } else if (index == this.length - 1) {
            return this.pop();
        }
        let poppedNode = this.get(index);
        if (poppedNode) {
            poppedNode.prev.next = poppedNode.next;
            poppedNode.next.prev = poppedNode.prev;
            poppedNode.next = null;
            poppedNode.prev = null
            this.length--;
            return poppedNode;
        } else {
            return null;
        }
    }

    deleteAll() {   // O(1) O(1)
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

}