import { StationStats , Dineable} from "../interfaces";
export class PeopleDiner implements Dineable{
  serveDinner(carID: number, servingStats: StationStats): void {
      console.log(`Serving people dinner for ${carID} `)
      //cook in statistics
      servingStats.dined+=1;
  }
}
