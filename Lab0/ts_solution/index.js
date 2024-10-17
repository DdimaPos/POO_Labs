"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require("./resources/input.json");
var fs = require("fs");
var UniverseDefs_1 = require("./UniverseDefs");
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
var CreaturesLists = /** @class */ (function () {
    function CreaturesLists() {
        this.Marvel = [];
        this.Star_Wars = [];
        this.Hitchhickers = [];
        this.Lord_of_rings = [];
    }
    return CreaturesLists;
}());
var Clasify = /** @class */ (function () {
    function Clasify() {
    }
    Clasify.Classification = function (val) {
        var marvelness = 0, ringness = 0, hitchness = 0, starwarness = 0, numberOfMaxPoints = 0;
        if (val.planet != undefined) {
            if (UniverseDefs_1.MarvelUniverse.Planets.indexOf(val.planet) !== -1)
                marvelness++;
            if (UniverseDefs_1.HitchhickersUniverse.Planets.indexOf(val.planet) !== -1)
                hitchness++;
            if (UniverseDefs_1.StarWarsUniverse.Planets.indexOf(val.planet) !== -1)
                starwarness++;
            if (UniverseDefs_1.LordOfTheRingsUniverse.Planets.indexOf(val.planet) !== -1)
                ringness++;
        }
        if (val.traits != undefined)
            val.traits.forEach(function (trait) {
                if (UniverseDefs_1.MarvelUniverse.Traits.indexOf(trait) !== -1)
                    marvelness++;
                if (UniverseDefs_1.StarWarsUniverse.Traits.indexOf(trait) !== -1)
                    starwarness++;
                if (UniverseDefs_1.HitchhickersUniverse.Traits.indexOf(trait) !== -1)
                    hitchness++;
                if (UniverseDefs_1.LordOfTheRingsUniverse.Traits.indexOf(trait) !== -1)
                    ringness++;
            });
        if (val.isHumanoid != undefined && val.isHumanoid) {
            marvelness++;
            hitchness++;
            ringness++;
        }
        else {
            starwarness++;
            hitchness++;
        }
        if (val.age <= UniverseDefs_1.MarvelUniverse.AsgardianMaxAge)
            marvelness++;
        if (val.age <= UniverseDefs_1.StarWarsUniverse.WookieMaxAge || val.age <= UniverseDefs_1.StarWarsUniverse.EwokMaxAge)
            starwarness++;
        if (val.age <= UniverseDefs_1.HitchhickersUniverse.BetelgeusianMaxAge || val.age <= UniverseDefs_1.HitchhickersUniverse.VogonMaxAge)
            hitchness++;
        if (val.age <= UniverseDefs_1.LordOfTheRingsUniverse.DwarfMaxAge)
            ringness++;
        var maxPoints = Math.max(Math.max(marvelness, starwarness), Math.max(ringness, hitchness));
        if (marvelness == maxPoints)
            numberOfMaxPoints++;
        if (starwarness == maxPoints)
            numberOfMaxPoints++;
        if (ringness == maxPoints)
            numberOfMaxPoints++;
        if (hitchness == maxPoints)
            numberOfMaxPoints++;
        //if there is more than one max value, return "undetermined"
        if (numberOfMaxPoints > 1)
            return "undetermined";
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
    };
    return Clasify;
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
        Program.saveToFile("./resources/MarvelCreatures.json", creaturesLists.Marvel);
        Program.saveToFile("./resources/StarWarsCreatures.json", creaturesLists.Star_Wars);
        Program.saveToFile("./resources/HitchhickersCreatures.json", creaturesLists.Hitchhickers);
        Program.saveToFile("./resources/LordOfRingsCreatures.json", creaturesLists.Lord_of_rings);
    };
    return Program;
}());
Program.Main();
