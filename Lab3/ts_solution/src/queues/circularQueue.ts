import { Queue } from "./queueInterface";
export class CircularQueue<T> implements Queue<T> {
  //https://www.geeksforgeeks.org/introduction-to-circular-queue/
  private items: (T | null)[];
  private front: number = 0;
  private rear: number = -1;
  private size: number = 0;
  private capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.items = new Array(capacity).fill(null);
  }

  enqueue(item: T): void {
    if (this.isFull()) throw Error("Queue is full");

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = item;
    this.size++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    var dequeuedValue = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return dequeuedValue || undefined;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  isFull(): boolean {
    return this.size === this.capacity;
  }
  getSize(): number {
    return this.size;
  }
}
