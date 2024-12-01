import { StationStats } from "../interfaces/stationStats";
import { Statistic } from "../services/statistic";
export class ModifyStatistics {
  static addToStatistics(
    //stationType: StationType,
    stationStats: StationStats,
    //globalStats: Statistic,
    addCars: Function,
    addDined: Function,
    addPassenger: Function,
    stats: Statistic,
  ) {
    addPassenger.bind(stats)("PEOPLE", stationStats.people);
    addPassenger.bind(stats)("ROBOTS", stationStats.robots);
    addCars.bind(stats)(
      stationStats.people + stationStats.robots,
      stationStats.consumption,
    );
    addDined.bind(stats)(stationStats.dined);
  }
}
