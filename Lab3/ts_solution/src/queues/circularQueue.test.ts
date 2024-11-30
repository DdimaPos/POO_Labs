import { CircularQueue } from "./circularQueue";
describe("Circular Queue testing", () => {
  test("Insertion test", () => {
    var queue = new CircularQueue<number>(5);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);
    queue.enqueue(5);
    expect(queue.isFull()).toBe(true);
  });
  test("Error on full enqueuing", () => {
    var queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(() => {
      queue.enqueue(3);
    }).toThrow("Queue is full");
  });
  test("Deletion test", () => {
    var queue = new CircularQueue<number>(3);
    expect(queue.dequeue()).toBeUndefined();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
  });
});
