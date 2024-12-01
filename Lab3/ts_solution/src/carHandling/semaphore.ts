import { Car } from "./car";
import { CarStation } from "./carStation";
import { Worker } from "node:worker_threads";
type StationType = "gasPeople" | "gasRobots" | "elPeople" | "elRobots";
export class Semaphore {
  private stationLoading = {
    gasPeople: 0,
    gasRobots: 0,
    elPeople: 0,
    elRobots: 0,
  };

  private stations = {
    "GAS-PEOPLE-true": "gasPeople",
    "GAS-ROBOTS-true": "gasRobots",
    "ELECTRIC-PEOPLE-true": "elPeople",
    "ELECTRIC-ROBOTS-true": "elRobots",
  };
  constructor(
    private gasPeople: Worker,
    private gasRobots: CarStation,
    private elPeople: CarStation,
    private elRobots: CarStation,
  ) {}

  guideCar(car: Car): void {
    //guide if dining
    var primaryStation = `${car.type}-${car.passengers}-${car.isDining}`;
    switch (primaryStation) {
      case "GAS-PEOPLE-true":
        //send to worker
        this.gasPeople.postMessage(car);
        console.log("tried to send message");
        this.stationLoading.gasPeople++;
        return;
      case "ELECTRIC-PEOPLE-true":
        this.elPeople.addCar(car);
        this.stationLoading.elPeople++;
        return;
      case "GAS-ROBOTS-true":
        this.gasRobots.addCar(car);
        this.stationLoading.gasRobots++;
        return;
      case "ELECTRIC-ROBOTS-true":
        this.elRobots.addCar(car);
        this.stationLoading.elRobots++;
        return;
    }
    //guide if not dining
    if (car.type === "GAS") {
      if (this.stationLoading.gasPeople > this.stationLoading.gasRobots) {
        this.gasRobots.addCar(car);
        this.stationLoading.gasRobots++;
      } else {
        //this.gasPeople.addCar(car);
        this.gasPeople.postMessage(car);
        console.log("tried to send message");
        this.stationLoading.gasPeople++;
      }
      return;
    }
    if (car.type === "ELECTRIC") {
      if (this.stationLoading.elPeople > this.stationLoading.elRobots) {
        this.elRobots.addCar(car);
        this.stationLoading.elRobots++;
      } else {
        this.elPeople.addCar(car);
        this.stationLoading.elPeople++;
      }
      return;
    }
    throw Error("No suitable stations");
  }

  unloadCounter(stationType: StationType): void {
    if (this.stationLoading[stationType] > 0) {
      this.stationLoading[stationType]=0;
    } else {
      console.warn(`Cannot unload from an empty station: ${stationType}`);
    }
  }
  getLoading() {
    return this.stationLoading;
  }
}
