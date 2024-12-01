import fs from "node:fs";
import path from "node:path";
import { Worker } from "node:worker_threads";

import { Car, Semaphore } from "./carHandling";

class Program {
  static Main() {
    //////try to pass  worker to semaphore
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
    gasRobotsWorker.on("message", (_) => semaphore.unloadCounter("gasRobots"));
    gasPeopleWorker.on("message", (_) => semaphore.unloadCounter("gasPeople"));
    elRobotsWorker.on("message", (_) => semaphore.unloadCounter("elRobots"));
    elPeopleWorker.on("message", (_) => semaphore.unloadCounter("elPeople"));

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
