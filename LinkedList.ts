class Node<T> {
  value: T | null = null;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> = null;
  tail: Node<T> = null;
  length: number = 0;

  constructor(value?: T) {
    if (value) {
      const newNode = new Node<T>(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
  }

  push(value: T) {
    const newNode = new Node<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): Node<T> {
    if (!this.head) {
      return undefined;
    }

    let pre = this.head;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

const list = new LinkedList<number>(1);
list.push(2).push(3).push(4);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
