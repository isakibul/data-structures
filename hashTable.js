class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = new Array(size);
  }

  // Simple hash function
  hash(key) {
    let hashValue = 0;
    for (let char of key) {
      hashValue += char.charCodeAt(0);
    }
    return hashValue % this.size;
  }

  // Insert key-value pair
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    const existing = bucket.find(([k]) => k === key);

    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  // Retrieve value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const pair = bucket.find(([k]) => k === key);
      if (pair) {
        return pair[1];
      }
    }
    return undefined;
  }

  // Remove key-value pair
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const pairIndex = bucket.findIndex(([k]) => k === key);
      if (pairIndex !== -1) {
        bucket.splice(pairIndex, 1);
        return true;
      }
    }
    return false;
  }

  // Check if key exists
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket ? bucket.some(([k]) => k === key) : false;
  }
}

// Example Usage
const hashTable = new HashTable();

hashTable.set("name", "John");
hashTable.set("age", 25);
hashTable.set("city", "New York");

console.log(hashTable.get("name"));
console.log(hashTable.get("age"));

hashTable.delete("city");
console.log(hashTable.get("city"));

console.log(hashTable.has("age"));
console.log(hashTable.has("city"));
