import { Dineable, Refuelable, Queue, StationStats } from "../interfaces";
import { Car } from "./car";
export class CarStation {
  constructor(
    private diningService: Dineable,
    private refuelingService: Refuelable,
    private queue: Queue<Car>,
  ) {}

  serveCars(): StationStats {
    var servingStats: StationStats = {
      people: 0,
      robots: 0,
      dined: 0,
      consumption: 0,
    };
    while (!this.queue.isEmpty()) {
      var toBeServed: Car | undefined = this.queue.dequeue();
      if (!toBeServed) continue;
      if (toBeServed.isDining) {
        this.diningService.serveDinner(toBeServed.id, servingStats);
      }
      this.refuelingService.refuel(
        toBeServed.id,
        toBeServed.passengers,
        toBeServed.consumption,
        servingStats,
      );
    }
    //return statistics about the serving session
    return servingStats;
  }
  addCar(car: Car): void {
    this.queue.enqueue(car);
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
}
