import fs from "node:fs";
import path from "node:path";
import { Worker } from "node:worker_threads";

import { Car, CarStation, Semaphore } from "./carHandling";
import { LinkedList } from "./queues";
import {
  ElectricStation,
  GasStation,
  PeopleDiner,
  RobotDiner,
} from "./services";

class Program {
  static Main() {
    var peopleDiner = new PeopleDiner();
    var robotDiner = new RobotDiner();
    var gasStation = new GasStation();
    var elStation = new ElectricStation();

    var carList = new LinkedList<Car>();

    //var gasPeopleStation = new CarStation(peopleDiner, gasStation, carList);
    var elPeopleStation = new CarStation(peopleDiner, elStation, carList);
    var gasRobotsStation = new CarStation(robotDiner, gasStation, carList);
    var elRobotsStation = new CarStation(robotDiner, elStation, carList);

    //////try to pass  worker to semaphore
    var gasPeopleWorker = new Worker(
      path.join(__dirname, "/workers/gasPeople.js"),
      {
        workerData: {
          path: "gasPeople.ts",
        },
      },
    );

    //////
    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsStation,
      elPeopleStation,
      elRobotsStation,
    );
    console.log("initialized semaphore");
    var files = fs.readdirSync(path.join(__dirname, "../sources/queue"));

    files.forEach((file) => {
      const filePath = path.join(__dirname, "../sources/queue", file);
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        const car: Car = JSON.parse(data); // Parse JSON to a Car object
        semaphore.guideCar(car); // Call the semaphore method
        console.log("guided the car");
      } catch (error) {
        console.error(`Failed to process file ${file}:`, error);
      }
    });

    /* My wet dreams about multithreading
     * var gasPeopleWorker = new Worker(
      path.join(__dirname, "/workers/gasPeople.js"),
      {
        workerData: {
          gasPeopleStation: gasPeopleStation,
          path: "gasPeople.ts",
        },
      },
    );
    gasPeopleWorker.on("message", (message) => {
      console.log("Message from another thread:", message);
    });*/
  }
}
//var files = fs.readdirSync(path.join(__dirname, "../sources/queue"));
//console.log(files);
Program.Main();
