import { parentPort } from "worker_threads";
import { GasStation, RobotDiner } from "../services";
import { ArrayQueue } from "../queues";
import { Car, CarStation } from "../carHandling";
import { StationStats } from "../interfaces/stationStats";

class GasRobotsWorker {
  static Main() {
    var station = new GasStation();
    var diner = new RobotDiner();
    var carList = new ArrayQueue<Car>();
    //console.log("message from the thread")
    var carStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car) => {
      //console.log("New car to gasPeople station", car);
      carStation.addCar(car);
    });

    setInterval(() => {
      if (!carStation.isEmpty()) {
        var servingStats: StationStats = carStation.serveCars();
        //console.log(servingStats)
        parentPort?.postMessage(servingStats);
      }
    }, 4000);
  }
}
GasRobotsWorker.Main();
