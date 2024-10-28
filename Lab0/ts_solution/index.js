"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;
var input = require("./resources/input.json");
var fs = require("fs");
var Classify_1 = require("./Classify");
var Creature = /** @class */ (function () {
    function Creature(id, isHumanoid, planet, age, traits) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
    return Creature;
}());
exports.Creature = Creature;
var CreaturesLists = /** @class */ (function () {
    function CreaturesLists() {
        this.Marvel = [];
        this.Star_Wars = [];
        this.Hitchhickers = [];
        this.Lord_of_rings = [];
    }
    return CreaturesLists;
}());
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.saveToFile = function (filename, data) {
        fs.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
            if (err) {
                console.error("Error writing file ".concat(filename, ":"), err);
            }
            else {
                console.log("File ".concat(filename, " has been saved."));
            }
        });
    };
    Program.Main = function () {
        var creatureList = input.input.map(function (val) {
            return new Creature(val.id, val.isHumanoid, val.planet, val.age, val.traits);
        });
        var creaturesLists = new CreaturesLists();
        creatureList.forEach(function (val) {
            switch (Classify_1.Clasify.Classification(val)) {
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
        Program.saveToFile("./resources/MarvelCreatures.json", creaturesLists.Marvel);
        Program.saveToFile("./resources/StarWarsCreatures.json", creaturesLists.Star_Wars);
        Program.saveToFile("./resources/HitchhickersCreatures.json", creaturesLists.Hitchhickers);
        Program.saveToFile("./resources/LordOfRingsCreatures.json", creaturesLists.Lord_of_rings);
    };
    return Program;
}());
Program.Main();
