// Question
// Implement a Linked List with methods

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    preappend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    find(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let prev = this.head;
        let current = this.head.next;
        while (current) {
            if (current.value === value) {
                prev.next = current.next;
            }
            current = current.next;
            prev = prev.next;
        }
        return;
    }

    print() {
        let current = this.head;
        let arr = [];

        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

const newLL = new LinkedList();

newLL.append(2);
newLL.append(3);
newLL.preappend(1);
console.log(newLL.find(3));
newLL.delete(4);
console.log(newLL.print());
console.log(newLL);