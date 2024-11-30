import { Refuelable } from "../interfaces/refuelable";
import { stats } from "./statistic";
export class ElectricStation implements Refuelable{
  refuel(carID: number, passengerType: string, consumption: number): void {
      console.log("Electric refuel for car", carID)
      stats.addElectricCars(consumption);
      stats.addPassenger(passengerType);
  }
}
