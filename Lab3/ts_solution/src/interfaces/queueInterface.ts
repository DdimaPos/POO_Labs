export interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  isEmpty(): boolean;
}
