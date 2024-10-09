"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require("./resources/input.json");
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
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Classification = function (val) {
        var marvelness = 0, ringness = 0, hitchness = 0, starwarness = 0;
        //check planet
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
        if (val.planet != undefined) {
            //marvel
            //if(creature.planet == "Earth" && creature.age <= MarvelUniverse.EarthMaxAge) marvelness++;
            if (val.planet == "Asgard" && val.age <= UniverseDefs_1.MarvelUniverse.AsgardianMaxAge)
                marvelness++;
            //starwars
            if (val.planet == "Kashyyk" && val.age <= UniverseDefs_1.StarWarsUniverse.WookieMaxAge)
                starwarness++;
            if (val.planet == "Endor" && val.age <= UniverseDefs_1.StarWarsUniverse.EwokMaxAge)
                starwarness++;
            //hitchhickers
            if (val.planet == "Betelgeuse" &&
                val.age <= UniverseDefs_1.HitchhickersUniverse.BetelgeusianMaxAge)
                hitchness++;
            if (val.planet == "Vogsphere" &&
                val.age <= UniverseDefs_1.HitchhickersUniverse.VogonMaxAge)
                hitchness++;
            //lord of the rings
            if (val.planet == "Earth" &&
                val.age <= UniverseDefs_1.LordOfTheRingsUniverse.DwarfMaxAge)
                ringness++;
        }
        var maxPoints = Math.max(Math.max(marvelness, starwarness), Math.max(ringness, hitchness));
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
    };
    Program.Main = function () {
        var creatureList = input.input.map(function (val) {
            return new Creature(val.id, val.isHumanoid, val.planet, val.age, val.traits);
        });
        var creaturesLists = new CreaturesLists();
        creatureList.forEach(function (val) {
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
    };
    return Program;
}());
Program.Main();
