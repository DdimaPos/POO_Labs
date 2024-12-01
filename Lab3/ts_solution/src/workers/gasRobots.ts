import { parentPort } from "worker_threads";
import { GasStation, RobotDiner } from "../services";
import { ArrayQueue } from "../queues";
import { Car, CarStation } from "../carHandling";

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
        carStation.serveCars();
        parentPort?.postMessage("El People station finished serving cars");
      }
    }, 4000);
  }
}
GasRobotsWorker.Main();
