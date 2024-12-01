import { workerData, parentPort } from "worker_threads";
import { GasStation, PeopleDiner } from "../services";
import { LinkedList } from "../queues";
import { Car, CarStation } from "../carHandling";

class GasPeopleWorker{
  static Main(){
    var station = new GasStation();
    var diner = new PeopleDiner();
    var carList = new LinkedList<Car>;
    //console.log("message from the thread")
    var gasPeopleStation = new CarStation(diner, station, carList);

    parentPort?.on("message", (car)=>{
      //console.log("New car to gasPeople station", car);
      gasPeopleStation.addCar(car);
    })

    setInterval(()=>{
      gasPeopleStation.serveCars();
    }, 5000)
  }
}
GasPeopleWorker.Main();
//parentPort?.postMessage("Abudabi");
