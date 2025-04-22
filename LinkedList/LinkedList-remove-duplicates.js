class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REMOVEDUPLICATES METHOD HERE //
  //                                        //
  //                                        //
  //                                        //
  //                                        //
  ////////////////////////////////////////////
  removeDuplicates() {
    const numbersSeen = {};
    if (this.length <= 1) {
      return;
    }

    let current = this.head.next;
    let previous = this.head;
    numbersSeen[this.head.value] = true;
    while (current) {
      if (numbersSeen[current.value]) {
        // duplicate
        let temp = current.next;
        previous.next = temp;
        this.length--;
      } else {
        numbersSeen[current.value] = true;
        previous = previous.next;
      }
      current = current.next;
    }
  }

  removeDuplicatesCorrect() {
    const values = new Set();
    let previous = null;
    let current = this.head;
    while (current !== null) {
      if (values.has(current.value)) {
        previous.next = current.next;
        this.length -= 1;
      } else {
        values.add(current.value);
        previous = current;
      }
      current = current.next;
    }
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
