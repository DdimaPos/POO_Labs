"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LordOfTheRingsUniverse = exports.HitchhickersUniverse = exports.StarWarsUniverse = exports.MarvelUniverse = void 0;
var MarvelUniverse = /** @class */ (function () {
    function MarvelUniverse() {
    }
    MarvelUniverse.Planets = ["Asgard"];
    MarvelUniverse.Traits = ["BLONDE", "TALL"];
    MarvelUniverse.EarthMaxAge = 100;
    MarvelUniverse.AsgardianMaxAge = 5000;
    MarvelUniverse.isHumanoid = true;
    return MarvelUniverse;
}());
exports.MarvelUniverse = MarvelUniverse;
var StarWarsUniverse = /** @class */ (function () {
    function StarWarsUniverse() {
    }
    StarWarsUniverse.Planets = ["Kashyyyk", "Endor"];
    StarWarsUniverse.Traits = ["HAIRY", "TALL", "SHORT"];
    StarWarsUniverse.WookieMaxAge = 400;
    StarWarsUniverse.EwokMaxAge = 400;
    StarWarsUniverse.isHumanoid = false;
    return StarWarsUniverse;
}());
exports.StarWarsUniverse = StarWarsUniverse;
var HitchhickersUniverse = /** @class */ (function () {
    function HitchhickersUniverse() {
    }
    HitchhickersUniverse.Planets = ["Betelgeuse", "Vogsphere"];
    HitchhickersUniverse.Traits = ["EXTRA_ARMS", "EXTRA_HEAD", "GREEN", "BULKY"];
    HitchhickersUniverse.BetelgeusianMaxAge = 100;
    HitchhickersUniverse.VogonMaxAge = 5000;
    HitchhickersUniverse.isHumanoid = true;
    return HitchhickersUniverse;
}());
exports.HitchhickersUniverse = HitchhickersUniverse;
var LordOfTheRingsUniverse = /** @class */ (function () {
    function LordOfTheRingsUniverse() {
    }
    LordOfTheRingsUniverse.Planets = ["Earth"];
    LordOfTheRingsUniverse.Traits = ["SHORT", "BULKY", "POINTY_EARS"];
    LordOfTheRingsUniverse.DwarfMaxAge = 200;
    LordOfTheRingsUniverse.ElfMaxAge = Number.MAX_VALUE;
    LordOfTheRingsUniverse.isHumanoid = true;
    return LordOfTheRingsUniverse;
}());
exports.LordOfTheRingsUniverse = LordOfTheRingsUniverse;
//# sourceMappingURL=UniverseDefs.js.map