import { parentPort } from "worker_threads";
import { ElectricStation, RobotDiner } from "../services";
import { LinkedList } from "../queues";
import { Car, CarStation } from "../carHandling";
import { StationStats } from "../interfaces";

class ElRobotsWorker {
  static Main() {
    var station = new ElectricStation();
    var diner = new RobotDiner();
    var carList = new LinkedList<Car>();
    var carStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car) => {
      carStation.addCar(car);
    });

    setInterval(() => {
      if (!carStation.isEmpty()) {
        var servingStats: StationStats = carStation.serveCars();
        parentPort?.postMessage(servingStats);
      }
    }, 3500);
  }
}
ElRobotsWorker.Main();
