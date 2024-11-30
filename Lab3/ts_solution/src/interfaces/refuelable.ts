export interface Refuelable{
  refuel(carID: number, passengerType: string, consumption: number): void;
}
