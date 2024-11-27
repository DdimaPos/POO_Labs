import { Dineable } from "../interfaces/dineable";
class PeopleDiner implements Dineable{
  serveDinner(carID: string): void {
      console.log(`Serving people dinner for ${carID} `)
  }
}
