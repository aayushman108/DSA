export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 1. Append (add to end)
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
    return this;
  }

  // 2. Prepend (add to start)
  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
    return this;
  }

  // 3. Insert at index
  insert(index, value) {
    if (index < 0 || index > this.size) return null;

    if (index === 0) return this.prepend(value);
    if (index === this.size) return this.append(value);

    const node = new Node(value);
    let prev = this.get(index - 1);

    node.next = prev.next;
    prev.next = node;

    this.size++;
    return this;
  }

  // 4. Get node by index
  get(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current;
  }

  // 5. Update value
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  // 6. Remove first
  removeFirst() {
    if (!this.head) return null;

    const removed = this.head;
    this.head = this.head.next;

    if (!this.head) this.tail = null;

    this.size--;
    return removed.value;
  }

  // 7. Remove last
  removeLast() {
    if (!this.head) return null;

    if (this.size === 1) {
      const val = this.head.value;
      this.head = this.tail = null;
      this.size = 0;
      return val;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.size--;

    return current.value;
  }

  // 8. Remove by index
  remove(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.removeFirst();
    if (index === this.size - 1) return this.removeLast();

    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.size--;

    return removed.value;
  }

  // 9. Reverse list ⭐ (important)
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  // 10. Search
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // 11. Convert to array (debug helper)
  toArray(head = this.head) {
    const arr = [];
    let current = head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  // 12. Print
  print() {
    console.log(this.toArray().join(" -> ") + " -> null");
  }
}

// https://chatgpt.com/share/69898279-3d18-8005-bb40-64053f842aba
// Ego is the enemy - book, Ryan Holiday
