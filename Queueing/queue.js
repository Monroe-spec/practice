//queues use JavaScript event loops, Printer software hob handling

class Queue {
    constructor() {
        this.queue = [];
    }
}

enqueue(item) {
    this.stack.push(item);
    //same as pushing a stack
}

dequeue() {
    return this.queue.shift();
}

peek() {
    return this.stack[0];
}

clear () {
    this.queue = [];
}

