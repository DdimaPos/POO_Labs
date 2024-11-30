import { Refuelable } from "../interfaces/refuelable";
import { stats } from "./statistic";
export class GasStation implements Refuelable{
  refuel(carID: number, passengerType: string, consumption: number): void {
      console.log("Gas refuel for car", carID)
      stats.addGasCars(consumption);
      stats.addPassenger(passengerType);
  }
}
