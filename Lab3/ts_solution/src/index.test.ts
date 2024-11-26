import {FIFOQueue} from './index';
describe("Queue Tests", () => {
  test("FIFOQueue works as expected - number", () => {
    const queue = new FIFOQueue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
})
