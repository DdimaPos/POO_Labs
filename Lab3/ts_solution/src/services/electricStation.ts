import { StationStats, Refuelable } from "../interfaces";
import { PassengerTypeLowercase } from "../types";
export class ElectricStation implements Refuelable {
  refuel(
    carID: number,
    passengerType: string,
    consumption: number,
    servingStats: StationStats,
  ): void {
    console.log("Electric refuel for car", carID);
    //cook in statistics
    var modifiedPassengerType: PassengerTypeLowercase =
      passengerType.toLowerCase() as PassengerTypeLowercase;
    servingStats[modifiedPassengerType] += 1;
    servingStats.consumption += consumption;
  }
}
