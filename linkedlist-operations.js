class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // Insert after a specific node
  insertAfterNode(prevNodeData, data) {
    let temp = this.head;
    while (temp && temp.data !== prevNodeData) {
      temp = temp.next;
    }
    if (!temp) {
      console.log("Previous node not found");
      return;
    }
    const newNode = new Node(data);
    newNode.next = temp.next;
    temp.next = newNode;
  }

  // Delete a node by value
  deleteNode(key) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // If the head holds the key
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    let prev = null;
    while (temp && temp.data !== key) {
      prev = temp;
      temp = temp.next;
    }

    // If the key is not found
    if (!temp) {
      console.log("Key not found");
      return;
    }

    // Unlink the node
    prev.next = temp.next;
  }

  // Search for a value
  searchNode(key) {
    let temp = this.head;
    while (temp) {
      if (temp.data === key) {
        return true; // Found
      }
      temp = temp.next;
    }
    return false; // Not found
  }

  // Traverse and print the linked list
  printList() {
    let temp = this.head;
    let output = "";
    while (temp) {
      output += `${temp.data} -> `;
      temp = temp.next;
    }
    console.log(output + "NULL");
  }
}

// Example usage
const linkedList = new LinkedList();

// Insert elements
linkedList.insertAtBeginning(10);
linkedList.insertAtBeginning(20);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(40);
linkedList.insertAfterNode(10, 25);

console.log("Linked List:");
linkedList.printList();

// Delete a node
linkedList.deleteNode(20);
console.log("After deletion of 20:");
linkedList.printList();

// Search for a value
console.log(
  "Search for 30:",
  linkedList.searchNode(30) ? "Found" : "Not Found"
);

// Freeing the list (optional in JavaScript due to garbage collection)
linkedList.head = null;
console.log("List cleared");
