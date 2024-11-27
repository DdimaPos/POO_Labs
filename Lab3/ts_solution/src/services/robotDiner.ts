import { Dineable } from "../interfaces/dineable";
class RobotDiner implements Dineable{
  serveDinner(carID: string): void {
      console.log(`Serving robots dinner for ${carID} `)
  }
}
