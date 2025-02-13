class Queue {
  constructor(size = 5) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  /**
   * Adds an element to the queue
   * @param {number} value
   */
  enQueue(value) {
    if (this.rear === this.size - 1) {
      console.log("Queue is full");
    } else {
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear++;
      this.items[this.rear] = value;
      console.log(`Inserted ${value}`);
    }
  }

  /**
   * Removes an element from the queue
   */
  deQueue() {
    if (this.front === -1 || this.front > this.rear) {
      console.log("Queue is empty");
    } else {
      console.log(`Deleted ${this.items[this.front]}`);
      this.front++;
      if (this.front > this.rear) {
        this.front = this.rear = -1;
      }
    }
  }

  /**
   * Displays the queue elements
   */
  display() {
    if (this.rear === -1) {
      console.log("Queue is empty");
    } else {
      console.log(
        "Queue elements are:",
        this.items.slice(this.front, this.rear + 1).join(" ")
      );
    }
  }
}

/**
 * Example usage
 */
const queue = new Queue();
queue.deQueue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);

queue.enQueue(6);

queue.deQueue();
queue.deQueue();

queue.display();
