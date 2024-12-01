import { workerData, parentPort } from "worker_threads";
import { GasStation, PeopleDiner } from "../services";
import { LinkedList } from "../queues";
import { Car, CarStation } from "../carHandling";

class GasPeopleWorker {
  static Main() {
    var station = new GasStation();
    var diner = new PeopleDiner();
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
        parentPort?.postMessage("Gas People station finished serving cars");
      }
    }, 3800);
  }
}
GasPeopleWorker.Main();
//parentPort?.postMessage("Abudabi");
