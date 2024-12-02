import { StationStats, Dineable } from "../interfaces";
import { stats } from "./statistic";
export class RobotDiner implements Dineable{
  serveDinner(carID: number, servingStats: StationStats): void {
      console.log(`Serving robots dinner for ${carID} `)
      stats.addDinedRobots(1);
      servingStats.dined+=1;
  }
}
