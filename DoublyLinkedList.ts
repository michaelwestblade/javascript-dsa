class DoublyLinkedListNode<T> {
  public value: T;
  public next?: DoublyLinkedListNode<T>;
  public prev?: DoublyLinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T>;
  public tail?: DoublyLinkedListNode<T>;
  public length = 0;

  constructor() {}

  push(value: T) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  toArray() {
    let current = this.head;
    let array = [];
    while (current) {
      array.unshift(current.value);
      current = current.next;
    }

    return array;
  }
}

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);

console.log(newList.toArray());
