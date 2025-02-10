class Stack {
  constructor(maxSize = 10) {
    this.items = [];
    this.top = -1;
    this.maxSize = maxSize;
  }

  /**
   * Checks if the stack is full.
   * @returns {boolean}
   */
  isFull() {
    return this.top === this.maxSize - 1;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.top === -1;
  }

  /**
   * Pushes an element onto the stack.
   * @param {*} newItem
   */
  push(newItem) {
    if (this.isFull()) {
      console.log("Stack is full");
    } else {
      this.top++;
      this.items[this.top] = newItem;
    }
  }

  /**
   * Removes and prints the top element from the stack.
   */
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      console.log("Item popped =", this.items[this.top]);
      this.top--;
    }
  }

  /**
   * Prints all elements of the stack.
   */
  printStack() {
    console.log("Stack:", this.items.slice(0, this.top + 1).join(" "));
  }
}

/**
 * Example usage of the Stack class.
 */
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

stack.printStack();

stack.pop();
stack.pop();

console.log("\nAfter popping out");
stack.printStack();
