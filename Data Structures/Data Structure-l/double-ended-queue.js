class Deque {
  /**
   * Constructor to initialize the deque
   * @param {number} maxSize
   */
  constructor(maxSize) {
    this.MAX = maxSize;
    this.deque = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  /**
   * Check if the deque is full
   * @returns {boolean}
   */
  isFull() {
    return (
      (this.front === 0 && this.rear === this.MAX - 1) ||
      this.front === this.rear + 1
    );
  }

  /**
   * Check if the deque is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === -1;
  }

  /**
   * Insert an element at the front
   * @param {*} element
   */
  insertFront(element) {
    if (this.isFull()) {
      console.log("\nUnable to insert element at front. Queue is full");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.MAX - 1;
    } else {
      this.front -= 1;
    }

    this.deque[this.front] = element;
    console.log(`\nInserted element ${element} at the front`);
  }

  /**
   * Insert an element at the rear
   * @param {*} element
   */
  insertRear(element) {
    if (this.isFull()) {
      console.log("\nUnable to insert element at rear. Queue is full");
      return;
    }

    if (this.rear === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.MAX - 1) {
      this.rear = 0;
    } else {
      this.rear += 1;
    }

    this.deque[this.rear] = element;
    console.log(`\nInserted element ${element} at the rear`);
  }

  /**
   * Delete an element from the front
   */
  deleteFront() {
    if (this.isEmpty()) {
      console.log("\nUnable to delete from front. Queue is empty");
      return;
    }

    let removed = this.deque[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.MAX - 1) {
      this.front = 0;
    } else {
      this.front += 1;
    }

    console.log(`\nDeleted ${removed} from the front.`);
  }

  /**
   * Delete an element from the rear
   */
  deleteRear() {
    if (this.isEmpty()) {
      console.log("\nUnable to delete at rear. Queue is empty");
      return;
    }

    let removed = this.deque[this.rear];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.MAX - 1;
    } else {
      this.rear -= 1;
    }

    console.log(`\nDeleted ${removed} from the rear.`);
  }

  /**
   * Display all elements in the deque
   */
  displayDeque() {
    if (this.isEmpty()) {
      console.log("\nDeque is empty");
      return;
    }

    console.log("Deque elements are: ");
    let i = this.front;
    while (true) {
      process.stdout.write(this.deque[i] + " ");
      if (i === this.rear) break;
      i = (i + 1) % this.MAX;
    }
    console.log();
  }
}

/**
 * Example Usage
 */
const dq = new Deque(5);

dq.insertRear(5);
dq.displayDeque();

dq.insertFront(15);
dq.displayDeque();

dq.insertRear(25);
dq.displayDeque();

dq.deleteFront();
dq.displayDeque();

dq.deleteRear();
dq.displayDeque();
