"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assistant = void 0;
var Assistant = /** @class */ (function () {
    function Assistant(asName) {
        this.Name = asName;
        this.assignedDisplays = [];
    }
    Assistant.prototype.AssignDisplay = function (display) {
        this.assignedDisplays.push(display);
        console.log("".concat(display.Model, " assigned"));
    };
    Assistant.prototype.Assist = function () {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Assisting with display comparisons for ".concat(this.Name, ":"));
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        for (var i = 0; i < this.assignedDisplays.length - 1; i++) {
            this.assignedDisplays[i].CompareWithMonitor(this.assignedDisplays[i + 1]);
            console.log("\n");
        }
    };
    Assistant.prototype.BuyDisplay = function (display) {
        var index = this.assignedDisplays.indexOf(display);
        if (index !== -1) {
            this.assignedDisplays.splice(index, 1);
            console.log("".concat(display.Model, " has been removed from the list"));
            return display;
        }
        else {
            console.log("".concat(display.Model, " is not in the list.\n"));
            return null;
        }
    };
    return Assistant;
}());
exports.Assistant = Assistant;
