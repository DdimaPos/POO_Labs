import { Queue } from "./../interfaces/queueInterface";
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
export class LinkedList<T> implements Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size: number = 0;
  enqueue(item: T): void {
    var newNode = new Node(item);

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;

    //if queue was empty new node is the head also
    if (!this.head) this.head = newNode;

    this.size++;
  }
  dequeue(): T | undefined {
    //check if queue is empty
    if (!this.head) return undefined;

    var dequeuedValue = this.head.value;

    this.head = this.head.next;

    if (!this.head) this.tail = null;

    this.size--;
    return dequeuedValue;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  getHead(): Node<T> | null {
    if (!this.head) return null;
    else return this.head;
  }
  getTail(): Node<T> | null {
    if (!this.tail) return null;
    else return this.tail;
  }
}
