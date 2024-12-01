import { workerData, parentPort } from "worker_threads";
import { ElectricStation, PeopleDiner } from "../services";
import { CircularQueue } from "../queues";
import { Car, CarStation } from "../carHandling";

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
        carStation.serveCars();
        parentPort?.postMessage("El People station finished serving cars");
      }
    }, 4900);
  }
}
ElPeopleWorker.Main();
