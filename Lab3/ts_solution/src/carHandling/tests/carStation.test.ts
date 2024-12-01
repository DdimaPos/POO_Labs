import { CircularQueue , LinkedList} from "../../queues";
import { ElectricStation, GasStation, PeopleDiner, RobotDiner } from "../../services";
import { Car } from "./../car";
import { CarStation } from "./../carStation";
describe("Car Station testing", () => {
  test("Test serving", () => {
    var peopleDiner = new PeopleDiner();
    var gasStation = new GasStation();
    var carList = new LinkedList<Car>();
    var station = new CarStation(peopleDiner, gasStation, carList);
    station.addCar({
      id: 9,
      type: "GAS",
      passengers: "PEOPLE",
      isDining: true,
      consumption: 60,
    });
    station.addCar({
      id: 10,
      type: "GAS",
      passengers: "PEOPLE",
      isDining: true,
      consumption: 70,
    });
    station.serveCars();
    expect(station.isEmpty()).toBe(true);
  });

  test("Test enqueuing", () => {
    var peopleDiner = new RobotDiner();
    var gasStation = new ElectricStation();
    var carList = new CircularQueue<Car>(10);
    var station = new CarStation(peopleDiner, gasStation, carList);
    station.addCar({
        id: 9,
        type: "ELECRIC",
        passengers: "ROBOTS",
        isDining: false,
        consumption: 100,
      });
    expect(station.isEmpty()).toBe(false);
    station.serveCars();
  });
});
