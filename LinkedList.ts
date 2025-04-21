class LLNode<T> {
  public value: T | null = null;
  public next: LLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LLNode<T> = null;
  tail: LLNode<T> = null;
  length: number = 0;

  constructor(value?: T) {
    if (value) {
      const newNode = new LLNode<T>(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
  }

  push(value: T) {
    const newNode = new LLNode<T>(value);

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

  pop(): LLNode<T> {
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

  unshift(value) {
    const newNode = new LLNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift(): LLNode<T> {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index: number): LLNode<T> {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index: number, value: T) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  print() {
    console.log("printing list");
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
    return temp;
  }
}

const list = new LinkedList<number>(1);
list.push(2).push(3).push(4).push(5);

console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("pop", list.pop());

list.unshift(1).unshift(2).unshift(3).unshift(4).unshift(5);
list.print();

console.log("shift", list.shift());
console.log("shift", list.shift());
console.log("shift", list.shift());
console.log("shift", list.shift());
console.log("shift", list.shift());
console.log("shift", list.shift());

list.push(1).push(2).push(3).push(4).push(5);
console.log("list.get(2)", list.get(2));

list.print();

list.set(2, 0);
list.print();
list.set(2, 3);
list.print();
