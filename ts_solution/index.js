"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require("./resources/input.json");
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
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var creatureList = input.input.map(function (val) {
            return new Creature(val.id, val.isHumanoid, val.planet, val.age, val.traits);
        });
        console.log(creatureList);
    };
    return Program;
}());
Program.Main();
