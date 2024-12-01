import { Statistic } from "./../statistic";
describe("Statistics tests", () => {
  test("People passenger adding", () => {
    var stats = new Statistic();
    expect(stats.getPeople()).toBe(0);
    stats.addPassenger("PEOPLE");
    expect(stats.getPeople()).toBe(1);
  });
  test("Robots passenger adding", () => {
    var stats = new Statistic();
    expect(stats.getRobots()).toBe(0);
    stats.addPassenger("ROBOTS");
    expect(stats.getRobots()).toBe(1);
  });
  test("Error passenger adding", () => {
    var stats = new Statistic();
    expect(()=>{
      stats.addPassenger("HELLO");
    }).toThrow("Unknown passenger type");
  });
  test("Gas cars adding + consumption", () => {
    var stats = new Statistic();
    expect(stats.getGasInfo()).toStrictEqual([0, 0]);
    stats.addGasCars(23);
    expect(stats.getGasInfo()).toStrictEqual([1, 23]);
    stats.addGasCars(77);
    expect(stats.getGasInfo()).toStrictEqual([2, 100]);
  });
  test("El cars adding + consumption", () => {
    var stats = new Statistic();
    expect(stats.getElInfo()).toStrictEqual([0, 0]);
    stats.addElectricCars(23);
    expect(stats.getElInfo()).toStrictEqual([1, 23]);
    stats.addElectricCars(77);
    expect(stats.getElInfo()).toStrictEqual([2, 100]);
  });
});
