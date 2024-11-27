import { Refuelable } from "../interfaces/refuelable";
class GasStation implements Refuelable{
  refuel(carID: string): void {
      console.log("Gas refuel for car", carID)
  }
}
