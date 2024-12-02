import fs from "node:fs";
import path from "node:path";
import { Worker } from "node:worker_threads";
import { stats } from "./services/statistic";
import { Car, Semaphore } from "./carHandling";
import { ModifyStatistics } from "./utils/modifyStatistics";

class Program {
  static DeclareWorkers() {
    var gasPeopleWorker = new Worker(
      path.join(__dirname, "/workers/gasPeople.js"),
      {
        workerData: {
          path: "gasPeople.ts",
        },
      },
    );
    var gasRobotsWorker = new Worker(
      path.join(__dirname, "/workers/gasRobots.js"),
      {
        workerData: {
          path: "gasRobots.ts",
        },
      },
    );
    var elPeopleWorker = new Worker(
      path.join(__dirname, "/workers/elPeople.js"),
      {
        workerData: {
          path: "elPeople.ts",
        },
      },
    );
    var elRobotsWorker = new Worker(
      path.join(__dirname, "/workers/elRobots.js"),
      {
        workerData: {
          path: "elRobots.ts",
        },
      },
    );

    return { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker };
  }

  static Main() {
    var { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker } =
      this.DeclareWorkers();
    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsWorker,
      elPeopleWorker,
      elRobotsWorker,
    );
    var processedFiles = new Set<string>();
    setInterval(() => {
      this.processFiles(semaphore, processedFiles);
    }, 1000);
    gasRobotsWorker.on("message", (stationStats) => {
      ModifyStatistics.addToStatistics(
        stationStats,
        stats.addGasCars,
        stats.addDinedRobots,
        stats.addPassenger,
        stats,
      );
      semaphore.unloadCounter("gasRobots"); //if have time try to pass parentport and decrement1 by 1
    });

    gasPeopleWorker.on("message", (stationStats) => {
      ModifyStatistics.addToStatistics(
        stationStats,
        stats.addGasCars,
        stats.addDinedPeople,
        stats.addPassenger,
        stats,
      );
      semaphore.unloadCounter("gasPeople");
    });
    elRobotsWorker.on("message", (stationStats) => {
      ModifyStatistics.addToStatistics(
        stationStats,
        stats.addElectricCars,
        stats.addDinedRobots,
        stats.addPassenger,
        stats,
      );
      semaphore.unloadCounter("elRobots");
    });
    elPeopleWorker.on("message", (stationStats) => {
      ModifyStatistics.addToStatistics(
        stationStats,
        stats.addElectricCars,
        stats.addDinedPeople,
        stats.addPassenger,
        stats,
      );

      semaphore.unloadCounter("elPeople");
    });
    setInterval(async () => {
      stats.getStats();
    }, 10000);
    /* My wet dreams about multithreading
     * have been accomplished
     */
  }

  static processFiles(semaphore: Semaphore, processedFiles: Set<string>) {
    var files = fs.readdirSync(path.join(__dirname, "../sources/queue"));
    files.forEach((file) => {
      if (!processedFiles.has(file)) {
        const filePath = path.join(__dirname, "../sources/queue", file);
        try {
          const data = fs.readFileSync(filePath, "utf-8");
          const car: Car = JSON.parse(data);
          semaphore.guideCar(car);
          processedFiles.add(file);
        } catch (error) {
          console.error(`Failed to process file ${file}:`, error);
        }
      }
    });
  }
}
Program.Main();
