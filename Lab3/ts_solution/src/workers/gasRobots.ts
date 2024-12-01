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
    var carStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car) => {
      carStation.addCar(car);
    });

    setInterval(() => {
      if (!carStation.isEmpty()) {
        var servingStats: StationStats = carStation.serveCars();
        parentPort?.postMessage(servingStats);
      }
    }, 4000);
  }
}
GasRobotsWorker.Main();
