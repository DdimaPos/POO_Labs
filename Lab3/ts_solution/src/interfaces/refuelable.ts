import { StationStats } from "./stationStats";

export interface Refuelable{
  refuel(carID: number, passengerType: string, consumption: number, servingStats: StationStats): void;
}
