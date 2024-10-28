import * as input from "./resources/input.json";
import * as fs from "fs";
import { Clasify } from "./Classify";
export class Creature {
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
