import { workerData, parentPort } from "worker_threads";
workerData.gasPeopleStation.serveCars();
parentPort?.postMessage("Abudabi");
