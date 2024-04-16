//     Test Own
// Creating a New Linked List Node
// Node Look Like This LinkedList: {value: 0, Next: {value: 1, Next: {value: 2, Next: null}}};
// In Linked List There Is A Pointer Pointing to The Both Side like left And Right Side
// I Named It Like Head And Tail

//Creating Node For My LinkedList
class Node {
  constructor(value, isList) {
    this.value = value;
    this.next = null;
    if (isList) {
      this.prev = null;
    }
  }
}

class LinkedList {
  constructor(value) {
    const createNode = new Node(value);
    this.head = createNode;
    this.tail = createNode;
    this.length = 1;
  }
  pushMethod(value) {
    const push = new Node(value);
    if (this.head === null) {
      this.head = push;
      this.tail = this.head;
    } else {
      this.tail.next = push;
      this.tail = push;
    }
    this.length++;
    return this;
  }
  popMethod() {
    if (!this.head) {
      throw new Error("Empty Node");
    } else if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    } else {
      let temp = this.head;
      let prev = this.head;
      while (temp.next !== null) {
        prev = temp;
        temp = temp.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return this;
    }
  }
  unShiftMethod(value) {
    const unShiftNode = new Node(value);
    if (!this.head) {
      this.head = unShiftNode;
      this.tail = unShiftNode;
    } else {
      unShiftNode.next = this.head;
      this.head = unShiftNode;
      this.length++;
      return this;
    }
  }
  shiftMethod() {
    if (!this.head) return undefined;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      return this;
    }
  }
  getMethod(index) {
    if (!this.head) throw new Error("There is No Node");
    if (index < -1 || index >= this.length) throw new Error("Check Your Value");
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  setMethod(index, value) {
    const getIndex = this.getMethod(index);
    if (getIndex) {
      getIndex.value = value;
    } else {
      throw new Error(getIndex);
    }
    return true;
  }
  insertMethod(index, value) {
    if (index === 0) return this.unShiftMethod(value);
    if (index === this.length) return this.pushMethod(value);
    if (index < 0 || index > this.length) throw new Error(`Check Your Value`);
    const insertNode = new Node(value);
    const getPrevious = this.getMethod(index - 1);
    const getNext = getPrevious.next;
    getPrevious.next = insertNode;
    insertNode.next = getNext.next;
    this.length++;
    return this;
  }
}

// const first = new LinkedList(1);
// first.pushMethod(2);
// first.pushMethod(3);
// first.pushMethod(4);
// first.pushMethod(-5);
// first.popMethod();
// first.unShiftMethod(0);
// first.shiftMethod();
// first.getMethod(0);
// first.setMethod(0, -0);
// first.insertMethod(1, 100);

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value, true);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  pushMethod(value) {
    const pushNode = new Node(value, true);
    if (!this.head) {
      this.head = pushNode;
      this.tail = pushNode;
    } else {
      let temp = this.tail;
      this.tail.next = pushNode;
      this.tail = pushNode;
      this.tail.prev = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.head === null) return undefined;
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  unShift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      newNode.next = this.head;
      this.head = newNode;
      temp.prev = newNode;
    }
    this.length++;
  }
  shift() {
    if (!this.head) throw new Error("This.Length Is 0");
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.head.prev = null;
    this.length--;
  }
  getMethod(index) {
    if (!this.head) throw new Error("This.Length Is 0");
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  setMethod(index, value) {
    if (!this.length) return undefined;
    if (index >= this.length || index <= -1) return undefined;
    const getIndex = this.getMethod(index);
    getIndex.value = value;
    return this;
  }
  insertMethod(index, value) {
    const newNode = new Node(value);
    if (!this.length === 0) return undefined;
    if (index < -1 || index > this.length) return undefined;
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.pushMethod(value);
    const getMethod = this.getMethod(index);
    const prev = getMethod.prev;
    const next = getMethod.next;
    prev.next = newNode;
    newNode.next = next;
    newNode.prev = prev;
    this.length++;
    return this;
  }
}

const first = new DoublyLinkedList(0);
first.pushMethod(1);
console.log(first);
