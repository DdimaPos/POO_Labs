import { LinkedList } from "../queues/linkedList";
import { ElectricStation } from "../services/electricStation";
import { GasStation } from "../services/gasStation";
import { PeopleDiner } from "../services/peopleDiner";
import { RobotDiner } from "../services/robotDiner";
import { Car } from "./car";
import { CarStation } from "./carStation";
import { Semaphore } from "./semaphore";
describe("Semaphore testing", () => {
  test("Test normal guiding", () => {
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
    var peopleDiner = new PeopleDiner();
    var robotDiner = new RobotDiner();
    var gasStation = new GasStation();
    var elStation = new ElectricStation();
    var carList = new LinkedList<Car>();
    var gasPeopleStation = new CarStation(peopleDiner, gasStation, carList);
    var elPeopleStation = new CarStation(peopleDiner, elStation, carList);
    var gasRobotsStation = new CarStation(robotDiner, gasStation, carList);
    var elRobotsStation = new CarStation(robotDiner, elStation, carList);

    var semaphore = new Semaphore(
      gasPeopleStation,
      gasRobotsStation,
      elPeopleStation,
      elRobotsStation,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
      return;
    });
    expect(semaphore.getLoading().gasPeople).toBe(1);
    expect(semaphore.getLoading().gasRobots).toBe(1);
    expect(semaphore.getLoading().elPeople).toBe(1);
    expect(semaphore.getLoading().elRobots).toBe(1);
  });

  test("Test smart guiding", () => {
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
    var peopleDiner = new PeopleDiner();
    var robotDiner = new RobotDiner();
    var gasStation = new GasStation();
    var elStation = new ElectricStation();
    var carList = new LinkedList<Car>();
    var gasPeopleStation = new CarStation(peopleDiner, gasStation, carList);
    var elPeopleStation = new CarStation(peopleDiner, elStation, carList);
    var gasRobotsStation = new CarStation(robotDiner, gasStation, carList);
    var elRobotsStation = new CarStation(robotDiner, elStation, carList);

    var semaphore = new Semaphore(
      gasPeopleStation,
      gasRobotsStation,
      elPeopleStation,
      elRobotsStation,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
    });
    expect(semaphore.getLoading().elPeople).toBe(2);
    expect(semaphore.getLoading().elRobots).toBe(1);
  });

  test("Test unloading", () => {
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
    var peopleDiner = new PeopleDiner();
    var robotDiner = new RobotDiner();
    var gasStation = new GasStation();
    var elStation = new ElectricStation();
    var carList = new LinkedList<Car>();
    var gasPeopleStation = new CarStation(peopleDiner, gasStation, carList);
    var elPeopleStation = new CarStation(peopleDiner, elStation, carList);
    var gasRobotsStation = new CarStation(robotDiner, gasStation, carList);
    var elRobotsStation = new CarStation(robotDiner, elStation, carList);

    var semaphore = new Semaphore(
      gasPeopleStation,
      gasRobotsStation,
      elPeopleStation,
      elRobotsStation,
    );

    mockCars.forEach((car: Car): void => {
      semaphore.guideCar(car);
    });
    
    {
      elPeopleStation.serveCars();
      semaphore.unloadCounter("elPeople");
      expect(semaphore.getLoading().elPeople).toBe(0);
    }

  });
});
