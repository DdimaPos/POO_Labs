import * as input from "./resources/input.json";
import {
  MarvelUniverse,
  StarWarsUniverse,
  HitchhickersUniverse,
  LordOfTheRingsUniverse,
} from "./UniverseDefs";
class Creature {
  id: number;
  isHumanoid: boolean | undefined;
  planet: string | undefined;
  age: number | undefined;
  traits: string[] | undefined;

  constructor(
    id: number,
    isHumanoid: boolean | undefined,
    planet: string | undefined,
    age: number | undefined,
    traits: string[] | undefined,
  ) {
    this.id = id;
    this.isHumanoid = isHumanoid;
    this.planet = planet;
    this.age = age;
    this.traits = traits;
  }
}

class CreaturesLists {
  Marvel: Creature[] = [];
  Star_Wars: Creature[] = [];
  Hitchhickers: Creature[] = [];
  Lord_of_rings: Creature[] = [];
}

class Program {
  public static Classification(val: Creature): string {
    var marvelness = 0,
      ringness = 0,
      hitchness = 0,
      starwarness = 0;
    //check planet
    if (val.planet != undefined) {
      if (MarvelUniverse.Planets.indexOf(val.planet)!==-1) marvelness++;
      if (HitchhickersUniverse.Planets.indexOf(val.planet)!==-1) hitchness++;
      if (StarWarsUniverse.Planets.indexOf(val.planet)!==-1) starwarness++;
      if (LordOfTheRingsUniverse.Planets.indexOf(val.planet)!==-1) ringness++;
    }
    if (val.traits != undefined)
      val.traits.forEach((trait) => {
        if (MarvelUniverse.Traits.indexOf(trait)!==-1) marvelness++;
        if (StarWarsUniverse.Traits.indexOf(trait)!==-1)starwarness++;
        if (HitchhickersUniverse.Traits.indexOf(trait)!==-1) hitchness++;
        if (LordOfTheRingsUniverse.Traits.indexOf(trait)!==-1) ringness++;
      });
    if (val.planet != undefined) {
      //marvel
      //if(creature.planet == "Earth" && creature.age <= MarvelUniverse.EarthMaxAge) marvelness++;
      if (val.planet == "Asgard" && val.age <= MarvelUniverse.AsgardianMaxAge)
        marvelness++;
      //starwars

      if (val.planet == "Kashyyk" && val.age <= StarWarsUniverse.WookieMaxAge)
        starwarness++;
      if (val.planet == "Endor" && val.age <= StarWarsUniverse.EwokMaxAge)
        starwarness++;

      //hitchhickers
      if (
        val.planet == "Betelgeuse" &&
        val.age <= HitchhickersUniverse.BetelgeusianMaxAge
      )
        hitchness++;
      if (
        val.planet == "Vogsphere" &&
        val.age <= HitchhickersUniverse.VogonMaxAge
      )
        hitchness++;
      //lord of the rings
      if (
        val.planet == "Earth" &&
        val.age <= LordOfTheRingsUniverse.DwarfMaxAge
      )
        ringness++;
    }

    var maxPoints: number = Math.max(
      Math.max(marvelness, starwarness),
      Math.max(ringness, hitchness),
    );

    switch (maxPoints) {
      case marvelness:
        return "Marvel";
      case starwarness:
        return "Star Wars";
      case hitchness:
        return "Hitchhickers";
      case ringness:
        return "Lord of Rings";
    }
    return "";
  }

  public static Main(): void {
    var creatureList: Creature[] = input.input.map((val: any) => {
      return new Creature(
        val.id,
        val.isHumanoid,
        val.planet,
        val.age,
        val.traits,
      );
    });
    const creaturesLists = new CreaturesLists();

    creatureList.forEach((val) => {
      switch (Program.Classification(val)) {
        case "Marvel":
          creaturesLists.Marvel.push(val);
          break;
        case "Star Wars":
          creaturesLists.Star_Wars.push(val);
          break;
        case "Hitchhickers":
          creaturesLists.Hitchhickers.push(val);
          break;
        case "Lord of Rings":
          creaturesLists.Lord_of_rings.push(val);
          break;
      }
    });
    console.log(creaturesLists);
  }
}

Program.Main();
