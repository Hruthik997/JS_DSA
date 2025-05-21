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

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index, value) {
        let tempNode = this.get(index);
        if(tempNode) {
            tempNode.value = value;
            return true;
        }
        return false;
    }
}

let linkedList = new CSLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(100);
console.log(linkedList.toString());
linkedList.traverse();
linkedList.search(20);