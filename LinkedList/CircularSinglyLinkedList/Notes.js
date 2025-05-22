class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CSLinkedList {
    // constructor(value) {     // O(1) O(1)
    //     const newNode = new Node(value);
    //     newNode.next = newNode;
    //     this.head = newNode;
    //     this.tail = newNode;
    //     this.length = 1;
    // }

    constructor() {        // O(1) O(1)
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        let tempNode = this.head;
        let result = '';
        while(tempNode) {
            result += tempNode.value;
            tempNode = tempNode.next;
            if(tempNode === this.head) {
                break;
            }
            result += ' -> '
        }
        return result;
    }

    append(value) {      // O(1) O(1)
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {     // O(1) O(1)
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    traverse() {  // O(N) O(1)
        let tempNode = this.head;
        while(tempNode) {
            console.log(tempNode.value);
            tempNode = tempNode.next;
            if(tempNode === this.head) {
                break;
            }
        }
    }

    search(target) {    // O(N) O(1)
        let tempNode = this.head;
        let index = 0;
        while(tempNode) {
            if(tempNode.value === target) {
                console.log(index);
                return true;
            }
            tempNode = tempNode.next;
            index++;
            if(tempNode === this.head) {
                break;
            }
        }
        return false;
    }

    get(index) {     // O(N) O(1)
        if(index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index, value) {  // O(N) O(1)
        let tempNode = this.get(index);
        if(tempNode) {
            tempNode.value = value;
            return true;
        }
        return false;
    }

    popFirst() {   // O(1) O(1)
        if(this.length === 0) {
            return null;
        }
        let poppedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    pop() {   // O(N) O(1)
        if(this.length === 0) {
            return null;
        }
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else  {
            let currentNode = this.head;
            while(currentNode.next !== this.head) {
                currentNode = currentNode.next;
            }
            this.tail = currentNode;
            currentNode.next = this.head;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    remove(index) {  // O(N) O(1)
        if(index < 0 || index >= this.length) {
            return null;
        }

        if(index === 0) {
            return this.popFirst();
        } else if(index == this.length - 1) {
            return this.pop;
        } 
        let prevNode = this.get(index - 1);
        let poppedNode = prevNode.next;
        prevNode.next = poppedNode.next;
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }

    deleteAll() {   // O(1) O(1)
        this.tail.next = null;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let linkedList = new CSLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(100);
console.log(linkedList.toString());
linkedList.traverse();
linkedList.search(20);