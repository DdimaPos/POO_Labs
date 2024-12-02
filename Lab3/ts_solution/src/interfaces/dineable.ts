import { StationStats } from "./stationStats";

export interface Dineable{
  serveDinner(carID: number, servingStats: StationStats):void;
}
