'use strict';


class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Queue {
    constructor() {
        this.first =  null
        this.last = null
    }

    enqueue(data) {
        const node = new Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last === null;
        }

        return node.value;
    }

    peek() {
        if (this.first === null) {
            return;
        }
        return this.first.value;
    }

    display() {
        if (this.first === null) {
            throw new Error('Queue Empty')
        }
        let current = this.first;
        while (current) {
            console.log(current.value)
            current = current.prev
        }
    }


}

module.exports = Queue;