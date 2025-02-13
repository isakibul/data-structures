class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  /**
   * Swaps two elements in the heap
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * Heapify the tree at index i
   * @param {number} i
   */
  heapify(i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  /**
   * Inserts a new element into the priority queue
   * @param {number} value
   */
  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;

    while (i > 0 && this.heap[Math.floor((i - 1) / 2)] < this.heap[i]) {
      this.swap(i, Math.floor((i - 1) / 2));
      i = Math.floor((i - 1) / 2);
    }
  }

  /**
   * Deletes an element from the priority queue
   * @param {number} value
   */
  delete(value) {
    let index = this.heap.indexOf(value);
    if (index === -1) return;

    this.swap(index, this.heap.length - 1);
    this.heap.pop();
    this.heapify(index);
  }

  /**
   * Prints the priority queue elements
   */
  printQueue() {
    console.log("Priority Queue:", this.heap.join(" "));
  }
}

/**
 * Example usage
 */
const pq = new PriorityQueue();
pq.insert(3);
pq.insert(4);
pq.insert(9);
pq.insert(5);
pq.insert(2);

console.log("Max-Heap array:");
pq.printQueue();

pq.delete(4);
console.log("After deleting an element:");
pq.printQueue();
