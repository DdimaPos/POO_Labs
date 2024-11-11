"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
var Programm = /** @class */ (function () {
    function Programm() {
    }
    Programm.ShowHelp = function () {
        console.log("Usage: dotnet run <task_number> [filenames]");
        console.log("Available task numbers:");
        console.log("1 - Compare monitors");
        console.log("2 - Read files and process text data");
        console.log("3 - Class Decomposition");
        console.log("4 - Bonus for task 2");
        console.log();
        console.log("Flags:");
        console.log("-h, --help    Display this help information.");
    };
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
    Programm.Task2 = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var dataList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modules_1.FileReader.ReadFileData(args)];
                    case 1:
                        dataList = _a.sent();
                        dataList.forEach(function (data) { return console.log(data); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Programm.Task3 = function () {
        var assistant = new modules_1.Assistant("Assistant1");
        var monitor1 = new modules_1.Display(1920, 1080, 700, "Monitor1");
        var monitor2 = new modules_1.Display(2560, 1440, 600, "Monitor2");
        var monitor3 = new modules_1.Display(3840, 2160, 400, "Monitor3");
        assistant.AssignDisplay(monitor1);
        assistant.AssignDisplay(monitor2);
        assistant.AssignDisplay(monitor3);
        assistant.Assist();
        assistant.BuyDisplay(monitor3);
        assistant.Assist();
    };
    Programm.Task4 = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var dataList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modules_1.FileReader.ReadFileData(args)];
                    case 1:
                        dataList = _a.sent();
                        dataList.forEach(function (data) { return console.log(data); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Programm.Main = function (Args) {
        if (Args.length == 0 || Args[0] == "-h" || Args[0] == "--help") {
            Programm.ShowHelp();
            return;
        }
        switch (Args[0]) {
            case "1":
                this.Task1();
                break;
            case "2":
                this.Task2(Args.slice(1));
                break;
            case "3":
                this.Task3();
                break;
            case "4":
                this.Task4(Args.slice(1));
                break;
        }
    };
    return Programm;
}());
Programm.Main(process.argv.slice(2));
