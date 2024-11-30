import { Dineable } from "../interfaces/dineable";
import { stats } from "./statistic";
export class RobotDiner implements Dineable{
  serveDinner(carID: number): void {
      console.log(`Serving robots dinner for ${carID} `)
      stats.addDinedRobots();
  }
}
