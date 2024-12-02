import { StationStats, Refuelable } from "../interfaces";
import { PassengerTypeLowercase } from "../types";
export class GasStation implements Refuelable {
  refuel(
    carID: number,
    passengerType: string,
    consumption: number,
    servingStats: StationStats,
  ): void {
    console.log("Gas refuel for car", carID);
    //cook in statistics
    var modifiedPassengerType: PassengerTypeLowercase =
      passengerType.toLowerCase() as PassengerTypeLowercase;
    servingStats[modifiedPassengerType] += 1;
    servingStats.consumption += consumption;
  }
}
