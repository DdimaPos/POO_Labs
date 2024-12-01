import { Dineable , Refuelable, Queue} from "../interfaces"
import { Car } from "./car";
interface StationStats{
  "people": number,
  "robots": number,
  "dined": number,// 0 
  "consumption": number,
}
type PassengerType = "people" | "robots"
export class CarStation {
  constructor(
    private diningService: Dineable,
    private refuelingService: Refuelable,
    private queue: Queue<Car>,
  ) {}

  serveCars(): StationStats{
    var servingStats: StationStats={
      people: 0,
      robots: 0,
      dined: 0,
      consumption: 0
    };
    while (!this.queue.isEmpty()) {
      var toBeServed: Car | undefined = this.queue.dequeue();
      if (!toBeServed) continue;
      if (toBeServed.isDining) {
        //increment the number of dined passengers
        servingStats.dined+=1;
        this.diningService.serveDinner(toBeServed.id)
      };
      this.refuelingService.refuel(
        toBeServed.id,
        toBeServed.passengers,
        toBeServed.consumption,
      );
      var passengerType: PassengerType = (toBeServed.passengers.toLowerCase() as PassengerType);
      servingStats[passengerType]+=1;
      servingStats.consumption+=toBeServed.consumption;
    }
    return servingStats;

  }
  addCar(car: Car): void {
    this.queue.enqueue(car);
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
}
