export class Statistic {
  public peopleDined: number = 0;
  public totalPeople: number = 0;
  public robotsDined: number = 0;
  public totalRobots: number = 0;
  public gasCarsServed: number = 0;
  public electricCarsServed: number = 0;
  public gasConsumption: number = 0;
  public electricConsumption: number = 0;

  addDinedPeople(val: number): void {
    this.peopleDined += val;
  }
  addDinedRobots(val: number): void {
    this.robotsDined += val;
  }
  addGasCars(carCount: number, consumption: number): void {
    this.gasCarsServed += carCount;
    this.gasConsumption += consumption;
  }
  addElectricCars(carCount: number, val: number): void {
    this.electricCarsServed += carCount;
    this.electricConsumption += val;
  }
  addPassenger(passType: string, val: number) {
    switch (passType) {
      case "PEOPLE":
        this.totalPeople+= val;
        break;
      case "ROBOTS":
        this.totalRobots+=val;
        break;
      default:
        throw Error("Unknown passenger type");
    }
  }
  getPeople(): number {
    return this.totalPeople;
  }
  getRobots(): number {
    return this.totalRobots;
  }
  getGasInfo(): number[] {
    return [this.gasCarsServed, this.gasConsumption];
  }
  getElInfo(): number[] {
    return [this.electricCarsServed, this.electricConsumption];
  }
  getStats() {
    console.log("-----------Statistics----------")
    console.log("PEOPLE dined:", this.peopleDined);
    console.log("PEOPLE not dined:", this.totalPeople - this.peopleDined);
    console.log("ROBOTS dined:", this.robotsDined);
    console.log("ROBOTS dined:", this.totalRobots - this.robotsDined);
    console.log("ELECTRIC cars served:", this.electricCarsServed);
    console.log("ELECTRIC cars consumption:", this.electricConsumption);
    console.log("GAS cars served:", this.gasCarsServed);
    console.log("GAS consumption:", this.gasConsumption);
    console.log("-------------------------------");
  }
}
export const stats = new Statistic();
