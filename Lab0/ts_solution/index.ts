import * as input from "./resources/input.json";
import * as fs from "fs";
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

class Clasify {
    public static Classification(val: Creature): string {
        var marvelness = 0,
            ringness = 0,
            hitchness = 0,
            starwarness = 0,
            numberOfMaxPoints = 0;

        if (val.planet != undefined) {
            if (MarvelUniverse.Planets.indexOf(val.planet) !== -1) marvelness++;
            if (HitchhickersUniverse.Planets.indexOf(val.planet) !== -1) hitchness++;
            if (StarWarsUniverse.Planets.indexOf(val.planet) !== -1) starwarness++;
            if (LordOfTheRingsUniverse.Planets.indexOf(val.planet) !== -1) ringness++;
        }

        if (val.traits != undefined)
            val.traits.forEach((trait) => {
                if (MarvelUniverse.Traits.indexOf(trait) !== -1) marvelness++;
                if (StarWarsUniverse.Traits.indexOf(trait) !== -1) starwarness++;
                if (HitchhickersUniverse.Traits.indexOf(trait) !== -1) hitchness++;
                if (LordOfTheRingsUniverse.Traits.indexOf(trait) !== -1) ringness++;
            });

        if (val.isHumanoid != undefined && val.isHumanoid) {
            marvelness++;
            hitchness++;
            ringness++;
        } else {
            starwarness++;
            hitchness++;
        }

        if (val.age <= MarvelUniverse.AsgardianMaxAge) marvelness++;
        if (val.age <= StarWarsUniverse.WookieMaxAge || val.age <= StarWarsUniverse.EwokMaxAge) starwarness++;
        if (val.age <= HitchhickersUniverse.BetelgeusianMaxAge || val.age <= HitchhickersUniverse.VogonMaxAge) hitchness++;
        if (val.age <= LordOfTheRingsUniverse.DwarfMaxAge) ringness++;

        var maxPoints: number = Math.max(
            Math.max(marvelness, starwarness),
            Math.max(ringness, hitchness),
        );
        if (marvelness == maxPoints) numberOfMaxPoints++;
        if (starwarness == maxPoints) numberOfMaxPoints++;
        if (ringness == maxPoints) numberOfMaxPoints++;
        if (hitchness == maxPoints) numberOfMaxPoints++;

        //if there is more than one max value, return "undetermined"
        if (numberOfMaxPoints > 1) return "undetermined";

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
        return "undetermined";
    }
}
class Program {
    private static saveToFile(filename: string, data: any): void {
        fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error(`Error writing file ${filename}:`, err);
            } else {
                console.log(`File ${filename} has been saved.`);
            }
        });
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
            switch (Clasify.Classification(val)) {
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
                default:
                    console.log("Unknown Universe:", val.id);
                    break;
            }
        });
        console.log(creaturesLists);
        Program.saveToFile(
            "./resources/MarvelCreatures.json",
            creaturesLists.Marvel,
        );
        Program.saveToFile(
            "./resources/StarWarsCreatures.json",
            creaturesLists.Star_Wars,
        );
        Program.saveToFile(
            "./resources/HitchhickersCreatures.json",
            creaturesLists.Hitchhickers,
        );
        Program.saveToFile(
            "./resources/LordOfRingsCreatures.json",
            creaturesLists.Lord_of_rings,
        );
    }
}

Program.Main();
