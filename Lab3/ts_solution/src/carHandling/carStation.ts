import { Dineable } from "../interfaces/dineable";
import { Refuelable } from "../interfaces/refuelable";
import { Queue } from "../interfaces/queueInterface";
import { Car } from "./car";

export class CarStation {
  constructor(
    private diningService: Dineable,
    private refuelingService: Refuelable,
    private queue: Queue<Car>,
  ) {}

  /*constructor(diningService: Dineable, refuelingService: Refuelable, queueType: Queue<Car>){
    this.diningService=diningService;
    this.refuelingService = refuelingService;
    this.queue = queueType;
  }*/
  serveCars(): void {
    while (!this.queue.isEmpty()) {
      var toBeServed: Car | undefined = this.queue.dequeue();
      if (!toBeServed) continue;
      if (toBeServed.isDining) this.diningService.serveDinner(toBeServed.id);
      this.refuelingService.refuel(
        toBeServed.id,
        toBeServed.passengers,
        toBeServed.consumption,
      );
    }
  }
  addCar(car: Car): void {
    this.queue.enqueue(car);
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
}
