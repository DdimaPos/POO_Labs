import { Queue } from "./queueInterface";
export class ArrayQueue<T> implements Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }
  dequeue(): T | undefined{
    return this.items.shift();
  }
  isEmpty(): boolean {
    return this.items.length===0;
  }
}
