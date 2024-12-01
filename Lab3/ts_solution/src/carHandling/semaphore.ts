import { Car } from "./car";
import { Worker } from "node:worker_threads";
type StationType = "gasPeople" | "gasRobots" | "elPeople" | "elRobots";
export class Semaphore {
  private stationLoading = {
    gasPeople: 0,
    gasRobots: 0,
    elPeople: 0,
    elRobots: 0,
  };

  constructor(
    private gasPeople: Worker,
    private gasRobots: Worker,
    private elPeople: Worker,
    private elRobots: Worker,
  ) {}

  guideCar(car: Car): void {
    //guide if dining
    var primaryStation = `${car.type}-${car.passengers}-${car.isDining}`;
    switch (primaryStation) {
      case "GAS-PEOPLE-true":
        this.gasPeople.postMessage(car);
        this.stationLoading.gasPeople++;
        return;
      case "ELECTRIC-PEOPLE-true":
        this.elPeople.postMessage(car);
        this.stationLoading.elPeople++;
        return;
      case "GAS-ROBOTS-true":
        this.gasRobots.postMessage(car);
        this.stationLoading.gasRobots++;
        return;
      case "ELECTRIC-ROBOTS-true":
        this.elRobots.postMessage(car);
        this.stationLoading.elRobots++;
        return;
    }
    //guide if not dining
    if (car.type === "GAS" && !car.isDining) {
      if (this.stationLoading.gasPeople > this.stationLoading.gasRobots) {
        this.gasRobots.postMessage(car);
        this.stationLoading.gasRobots++;
      } else {
        this.gasPeople.postMessage(car);
        this.stationLoading.gasPeople++;
      }
      return;
    }
    if (car.type === "ELECTRIC" && !car.isDining) {
      if (this.stationLoading.elPeople > this.stationLoading.elRobots) {
        this.elRobots.postMessage(car);
        this.stationLoading.elRobots++;
      } else {
        this.elPeople.postMessage(car);
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
