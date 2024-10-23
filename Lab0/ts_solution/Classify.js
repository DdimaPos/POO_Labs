"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clasify = void 0;
var UniverseDefs_1 = require("./UniverseDefs");
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
            hitchness += 0.5;
            ringness++;
        }
        else {
            starwarness++;
            hitchness += 0.5;
        }
        if (val.age <= UniverseDefs_1.MarvelUniverse.AsgardianMaxAge)
            marvelness++;
        if (val.age <= UniverseDefs_1.StarWarsUniverse.WookieMaxAge || val.age <= UniverseDefs_1.StarWarsUniverse.EwokMaxAge)
            starwarness++;
        if (val.age <= UniverseDefs_1.HitchhickersUniverse.BetelgeusianMaxAge || val.age <= UniverseDefs_1.HitchhickersUniverse.VogonMaxAge)
            hitchness++;
        if (val.age <= UniverseDefs_1.LordOfTheRingsUniverse.ElfMaxAge)
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
exports.Clasify = Clasify;
