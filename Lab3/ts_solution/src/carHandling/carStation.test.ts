import { LinkedList } from "../queues/linkedList";
import { GasStation } from "../services/gasStation";
import { PeopleDiner } from "../services/peopleDiner";
import { Car } from "./car";
import { CarStation } from "./carStation";
describe("Car Station testing", ()=>{
  test("Test serving", ()=>{
    var peopleDiner = new PeopleDiner()
    var gasStation = new GasStation()
    var carList = new LinkedList<Car>()
    var station = new CarStation(peopleDiner, gasStation, carList);
  })
})
