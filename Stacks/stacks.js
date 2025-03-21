//Stacks must be done with OOCD (Object Oriented Design) principles.

class stack {
    constructor() {
        this.stack = new WeakMap();
        this.stack.set(this, []);       
}
peek() {
    return this.stack.get(this)[this.stack.get(this).length - 1];
}



/*
class stack {
    constructor() {
        this.stack = new WeakMap();
        this.stack.set(this, []);       
}


    push(value) {
        this.stack.push(value);
        //this will add the value to the stack
    }

    pop() {
        return this.stack.pop();
        //this will return the last item of the array and remove it from the stack
    }
    remove() {
        this.stack.splice(0, this.stack.length);
        //this will remove all the elements in the stack
    }

    clear() {
        this.stack = [];
        //this will clear the stack
    }

    peek() {
        return this.stack[this.stack.length - 1];
        //will give me the last element in the stack
    }

    size() {
        return this.stack.length;
        //will give me the size of the stack
    }
} */

