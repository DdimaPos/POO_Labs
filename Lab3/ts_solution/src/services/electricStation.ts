import { Refuelable } from "../interfaces/refuelable";
class ElectricStation implements Refuelable{
  refuel(carID: string): void {
      console.log("Electric refuel for car", carID)
  }
}
