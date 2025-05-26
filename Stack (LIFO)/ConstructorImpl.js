// Last In First Out (LIFO) data structure.
// While using arrays for stack implementation, Always use from last and not from first.
// Because operations like inserting and deleting from beginning are costly O(N) in arrays.

class Stack {
    constructor() {   // O(1) O(1)
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    toString() {   // O(1) O(1)
        if(this.isEmpty) {
            return "Empty stack";
        } else{ 
            return this.items.slice().reverse().join('\n');
        }
    }

    isEmpty() {   // O(1) O(1)
        return this.items.length === 0;
    }

    pop() {    // O(1) O(1)
        if(this.isEmpty) {
            return "Empty stack";
        } else{ 
            return this.items.pop();
        }
    }

    peek() {     // O(1) O(1)
        if(this.isEmpty) {
            return "Empty stack";
        } else{ 
            return this.items[this.items.length - 1];
        }
        
    }

    size() {   // O(1) O(1)
        return this.items.length;
    }

    clear() {   // O(1) O(1)
        this.items = [];
    }
}