import { workerData, parentPort } from "worker_threads";
import { GasStation, RobotDiner } from "../services";
import { LinkedList } from "../queues";
import { Car, CarStation } from "../carHandling";

class GasRobotsWorker {
  static Main() {
    var station = new GasStation();
    var diner = new RobotDiner();
    var carList = new LinkedList<Car>();
    //console.log("message from the thread")
    var carStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car) => {
      //console.log("New car to gasPeople station", car);
      carStation.addCar(car);
    });

    setInterval(() => {
      if (!carStation.isEmpty()) {
        carStation.serveCars();
        parentPort?.postMessage("El Robot station finished serving cars");
      }
    }, 3500);
  }
}
GasRobotsWorker.Main();
