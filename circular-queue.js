class CircularQueue {
  /**
   * Constructor to initialize the circular queue
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  /**
   * Check if the queue is full
   * @returns {boolean}
   */
  isFull() {
    return (
      this.front === (this.rear + 1) % this.size ||
      (this.front === 0 && this.rear === this.size - 1)
    );
  }

  /**
   * Check if the queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === -1;
  }

  /**
   * Add an element to the queue
   * @param {*} element
   */
  enQueue(element) {
    if (this.isFull()) {
      console.log("\nQueue is full!!");
    } else {
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
      console.log(`\nInserted -> ${element}`);
    }
  }

  /**
   * Remove an element from the queue
   */
  deQueue() {
    if (this.isEmpty()) {
      console.log("\nQueue is empty!!");
    } else {
      let element = this.items[this.front];
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      console.log(`\nDeleted element -> ${element}`);
    }
  }

  /**
   * Display the current elements in the queue
   */
  display() {
    if (this.isEmpty()) {
      console.log("\nEmpty Queue");
    } else {
      console.log(`\nFront -> ${this.front}`);
      console.log("Items ->", this.getQueueElements().join(" "));
      console.log(`Rear -> ${this.rear}`);
    }
  }

  /**
   * Helper function to get all elements of the queue in the correct order
   * @returns {Array}
   */
  getQueueElements() {
    let result = [];
    let i = this.front;
    do {
      result.push(this.items[i]);
      i = (i + 1) % this.size;
    } while (i !== (this.rear + 1) % this.size);
    return result;
  }
}

/**
 * Example Usage
 */
const cq = new CircularQueue(5);

cq.deQueue();

cq.enQueue(1);
cq.enQueue(2);
cq.enQueue(3);
cq.enQueue(4);
cq.enQueue(5);

cq.enQueue(6);

cq.display();

cq.deQueue();
cq.display();

cq.enQueue(7);
cq.display();

cq.enQueue(8);
