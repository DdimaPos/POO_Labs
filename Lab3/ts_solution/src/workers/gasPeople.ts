import { parentPort } from "worker_threads";
import { GasStation, PeopleDiner } from "../services";
import { LinkedList } from "../queues";
import { Car, CarStation } from "../carHandling";
import { StationStats } from "../interfaces/stationStats";

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
        var servingStats: StationStats = carStation.serveCars();
        parentPort?.postMessage(servingStats);
      }
    }, 3800);
  }
}
GasPeopleWorker.Main();
//parentPort?.postMessage("Abudabi");
