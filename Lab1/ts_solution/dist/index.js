"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var input = __importStar(require("./resources/input.json"));
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
            if (UniverseDefs_1.MarvelUniverse.Planets.includes(val.planet))
                marvelness++;
            if (UniverseDefs_1.HitchhickersUniverse.Planets.includes(val.planet))
                hitchness++;
            if (UniverseDefs_1.StarWarsUniverse.Planets.includes(val.planet))
                starwarness++;
            if (UniverseDefs_1.LordOfTheRingsUniverse.Planets.includes(val.planet))
                ringness++;
        }
        if (val.traits != undefined)
            val.traits.forEach(function (trait) {
                if (UniverseDefs_1.MarvelUniverse.Traits.includes(trait))
                    marvelness++;
                if (UniverseDefs_1.StarWarsUniverse.Traits.includes(trait))
                    starwarness++;
                if (UniverseDefs_1.HitchhickersUniverse.Traits.includes(trait))
                    hitchness++;
                if (UniverseDefs_1.LordOfTheRingsUniverse.Traits.includes(trait))
                    ringness++;
            });
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
        if (val.planet == "Betelgeuse" && val.age <= UniverseDefs_1.HitchhickersUniverse.BetelgeusianMaxAge)
            hitchness++;
        if (val.planet == "Vogsphere" && val.age <= UniverseDefs_1.HitchhickersUniverse.VogonMaxAge)
            hitchness++;
        //lord of the rings
        if (val.planet == "Earth" && val.age <= UniverseDefs_1.LordOfTheRingsUniverse.DwarfMaxAge)
            ringness++;
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
//# sourceMappingURL=index.js.map