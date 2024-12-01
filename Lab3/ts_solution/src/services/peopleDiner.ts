import { Dineable } from "../interfaces/dineable";
import { stats } from "./statistic";
export class PeopleDiner implements Dineable{
  serveDinner(carID: number): void {
      console.log(`Serving people dinner for ${carID} `)
      stats.addDinedPeople(1);
  }
}
