import { Node } from "./Node.js";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      return this.head = newNode;
    }

    let entryPoint = this.head;
    while (entryPoint.next != null) {
      entryPoint = entryPoint.next;
    }
    entryPoint.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let length = 0;

    let startPoint = this.head;
    while (startPoint != null) {
      startPoint = startPoint.next;
      length += 1;
    }

    return length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let point = this.head;

    if (point === null) {
      return null;
    }

    while (point.next != null) {
      point = point.next;
    }

    return point;
  }

  at(index) {
    if (index >= this.size()) {
      return null;
    }

    let point = this.head;

    for (let i = 0; i < index; i++) {
      point = point.next;
    }

    return point;
  }

  pop() {
    let point = this.head;

    if (point === null) {
      return;
    }

    if (point.next === null) {
      return this.head = null;
    }

    while (point.next != null) {
      if (point.next.next === null) {
        point.next = null;
      } else {
        point = point.next;
      }
    }
  }

  contains(value) {
    let point = this.head;

    if (point === null) {
      return false;
    }

    while (point.next != null) {
      if (point.value == value) {
        return true;
      } else {
        point = point.next;
      }
    }

    if (this.getTail().value == value) {
      return true;
    }

    return false;
  }

  find(value) {
    let point = this.head;
    let length = this.size();

    for (let i = 0; i < length; i++) {
      if (point.value == value) {
        return i;
      } else {
        point = point.next;
      }
    }

    return null;
  }

  toString() {
    let point = this.head;
    let string = "";

    while (point != null) {
      string += `(${point.value}) -> `;
      point = point.next;
    }

    return string + 'null';
  }
}

export { LinkedList };
