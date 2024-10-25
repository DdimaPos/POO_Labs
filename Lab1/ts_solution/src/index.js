"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
var Programm = /** @class */ (function () {
    function Programm() {
    }
    Programm.Task1 = function () {
        var monitor1 = new modules_1.Display(1920, 1080, 700, "Monitor1");
        var monitor2 = new modules_1.Display(2560, 1440, 600, "Monitor2");
        var monitor3 = new modules_1.Display(3840, 2160, 400, "Monitor3");
        monitor1.CompareWithMonitor(monitor2);
        console.log();
        monitor1.CompareWithMonitor(monitor1);
        console.log();
        monitor3.CompareWithMonitor(monitor2);
        console.log();
    };
    Programm.Main = function (Args) {
        Programm.Task1();
    };
    return Programm;
}());
Programm.Main(process.argv.slice(2));
