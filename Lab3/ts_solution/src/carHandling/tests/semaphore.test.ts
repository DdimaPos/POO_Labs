import { Car } from "./../car";
import { Semaphore } from "./../semaphore";
import path from "node:path";
import { Worker } from "worker_threads";
describe("Semaphore testing", () => {
  var workersPath = "../../../dist/workers/";
  var declareWorkers = () => {
    //specify paths for dist directory!!!
    var gasPeopleWorker = new Worker(
      path.join(__dirname, workersPath, "gasPeople.js"),
      {
        workerData: {
          path: "gasPeople.ts",
        },
      },
    );
    var gasRobotsWorker = new Worker(
      path.join(__dirname, workersPath, "gasRobots.js"),
      {
        workerData: {
          path: "gasRobots.ts",
        },
      },
    );
    var elPeopleWorker = new Worker(
      path.join(__dirname, workersPath, "elPeople.js"),
      {
        workerData: {
          path: "elPeople.ts",
        },
      },
    );
    var elRobotsWorker = new Worker(
      path.join(__dirname, workersPath, "elRobots.js"),
      {
        workerData: {
          path: "elRobots.ts",
        },
      },
    );

    return { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker };
  };
  test("Normal guiding", () => {
    var mockCars = [
      {
        id: 1,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: false,
        consumption: 43,
      },
      {
        id: 2,
        type: "ELECTRIC",
        passengers: "ROBOTS",
        isDining: false,
        consumption: 31,
      },
      {
        id: 3,
        type: "GAS",
        passengers: "ROBOTS",
        isDining: true,
        consumption: 48,
      },
      {
        id: 4,
        type: "GAS",
        passengers: "PEOPLE",
        isDining: true,
        consumption: 60,
      },
    ];
    var { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker } =
      declareWorkers();

    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsWorker,
      elPeopleWorker,
      elRobotsWorker,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
      return;
    });
    expect(semaphore.getLoading().gasPeople).toBe(1);
    expect(semaphore.getLoading().gasRobots).toBe(1);
    expect(semaphore.getLoading().elPeople).toBe(1);
    expect(semaphore.getLoading().elRobots).toBe(1);

    //terminate all workers
    setTimeout(() => {
      gasRobotsWorker.terminate();
      gasPeopleWorker.terminate();
      elRobotsWorker.terminate();
      elPeopleWorker.terminate();
    }, 0);
  });

  test("Smart guiding", () => {
    var mockCars = [
      {
        id: 5,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: true,
        consumption: 43,
      },
      {
        id: 6,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: true,
        consumption: 31,
      },
      {
        id: 7,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: false,
        consumption: 48,
      },
    ];

    var { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker } =
      declareWorkers();

    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsWorker,
      elPeopleWorker,
      elRobotsWorker,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
    });
    expect(semaphore.getLoading().elPeople).toBe(2);
    expect(semaphore.getLoading().elRobots).toBe(1);

    //terminate all workers
    setTimeout(() => {
      gasRobotsWorker.terminate();
      gasPeopleWorker.terminate();
      elRobotsWorker.terminate();
      elPeopleWorker.terminate();
    }, 0);
  });

  test("Unloading", () => {
    var mockCars = [
      {
        id: 8,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: true,
        consumption: 43,
      },
      {
        id: 9,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: true,
        consumption: 31,
      },
      {
        id: 10,
        type: "ELECTRIC",
        passengers: "PEOPLE",
        isDining: false,
        consumption: 48,
      },
    ];

    var { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker } =
      declareWorkers();

    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsWorker,
      elPeopleWorker,
      elRobotsWorker,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
    });

    {
      elPeopleWorker.on("message", () => {
        semaphore.unloadCounter("elPeople");
        expect(semaphore.getLoading().elPeople).toBe(0);
      });
    }
    //terminate all workers
    setTimeout(() => {
      gasRobotsWorker.terminate();
      gasPeopleWorker.terminate();
      elRobotsWorker.terminate();
      elPeopleWorker.terminate();
    }, 0);
  });

  test("Error handling", () => {
    var mockCars = [
      {
        id: 11,
        type: "OIL",
        passengers: "Arthur Morgan",
        isDining: true,
        consumption: 43,
      },
    ];

    var { gasPeopleWorker, gasRobotsWorker, elPeopleWorker, elRobotsWorker } =
      declareWorkers();

    var semaphore = new Semaphore(
      gasPeopleWorker,
      gasRobotsWorker,
      elPeopleWorker,
      elRobotsWorker,
    );

    expect(() => {
      mockCars.forEach((car: Car): void => {
        semaphore.guideCar(car);
      });
    }).toThrow("No suitable stations");

    //terminate all workers
    setTimeout(() => {
      gasRobotsWorker.terminate();
      gasPeopleWorker.terminate();
      elRobotsWorker.terminate();
      elPeopleWorker.terminate();
    }, 0);
  });
});
