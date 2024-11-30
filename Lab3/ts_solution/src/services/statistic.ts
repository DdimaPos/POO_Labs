export class Statistic {
  public peopleDined: number = 0;
  public totalPeople: number = 0;
  public robotsDined: number = 0;
  public totalRobots: number = 0;
  public gasCarsServed: number = 0;
  public electricCarsServed: number = 0;
  public gasConsumption: number = 0;
  public electricConsumption: number = 0;

  addDinedPeople(): void {
    this.peopleDined += 1;
  }
  addDinedRobots(): void {
    this.robotsDined += 1;
  }
  addGasCars(val: number): void {
    this.gasCarsServed += 1;
    this.gasConsumption += val;
  }
  addElectricCars(val: number): void {
    this.electricCarsServed += 1;
    this.electricConsumption += val;
  }
  addPassenger(passType: string) {
    switch (passType) {
      case "PEOPLE":
        this.totalPeople++;
        break;
      case "ROBOTS":
        this.totalRobots++;
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
  getGasInfo(): number[]{
    return [this.gasCarsServed, this.gasConsumption];
  }
  getElInfo(): number[]{
    return [this.electricCarsServed, this.electricConsumption];
  }
  getStats() {
    console.log("People dined:", this.peopleDined);
    console.log("Not dined:", this.totalPeople - this.peopleDined);
    console.log("Robots dined:", this.robotsDined);
    console.log("Not dined:", this.totalRobots - this.robotsDined);
    console.log("Electric cars served:", this.electricCarsServed);
    console.log("Electric cars consumption:", this.electricConsumption);
    console.log("Gas cars served:", this.gasCarsServed);
    console.log("Gas consumption", this.gasConsumption);
  }
}
export var stats = new Statistic();
