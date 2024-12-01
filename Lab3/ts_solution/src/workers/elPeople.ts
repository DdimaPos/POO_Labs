import { workerData, parentPort } from "worker_threads";
import { ElectricStation, PeopleDiner } from "../services";
import { CircularQueue } from "../queues";
import { Car, CarStation } from "../carHandling";
import { StationStats } from "../interfaces/stationStats";

class ElPeopleWorker {
  static Main() {
    var station = new ElectricStation();
    var diner = new PeopleDiner();
    var carList = new CircularQueue<Car>(30);
    //console.log("message from the thread")
    var carStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car) => {
      //console.log("New car to gasPeople station", car);
      carStation.addCar(car);
    });

    setInterval(() => {
      if (!carStation.isEmpty()) {
        var servingStats: StationStats = carStation.serveCars();
        parentPort?.postMessage(servingStats);
      }
    }, 4900);
  }
}
ElPeopleWorker.Main();
