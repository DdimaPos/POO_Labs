import { Dineable } from "../interfaces/dineable";
import { Refuelable } from "../interfaces/refuelable";
import { Queue } from "../interfaces/queueInterface";
import { Car } from "./car";

export class CarStation{
  private diningService: Dineable;
  private refuelingService: Refuelable;
  private queue: Queue<Car>;

  constructor(diningService: Dineable, refuelingService: Refuelable, queueType: Queue<Car>){
    this.diningService=diningService;
    this.refuelingService = refuelingService;
    this.queue = queueType;
  }
  serveCars():void{

  }
  addCar():void{

  }
}
