export interface Refuelable{
  refuel(carID: string, passengerType: string, consumption: number): void;
}
