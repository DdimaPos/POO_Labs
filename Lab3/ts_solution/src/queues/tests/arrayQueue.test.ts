import { ArrayQueue } from "./../arrayQueue";
describe("Array Qeue", () => {
  test("Insertion test", () => {
    var queue = new ArrayQueue<number>();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(5);
  });
  test("Deletion test", () => {
    var queue = new ArrayQueue<number>();
    expect(queue.dequeue()).toBeUndefined();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
  });
});
