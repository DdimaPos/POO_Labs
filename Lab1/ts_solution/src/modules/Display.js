"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
var Display = /** @class */ (function () {
    function Display(Width, Height, Ppi, Model) {
        var _this = this;
        this.Width = Width;
        this.Height = Height;
        this.Ppi = Ppi;
        this.Model = Model;
        this.GetArea = function () { return _this.Width * _this.Height; };
    }
    Display.prototype.ShowResult = function (result, characteristic, m) {
        var _a;
        var answers = (_a = {},
            _a[-1] = "".concat(m.Model, " has bigger ").concat(characteristic, " than ").concat(this.Model),
            _a[1] = "".concat(this.Model, " has bigger ").concat(characteristic, " than ").concat(m.Model),
            _a[0] = "Both monitors are of the same size",
            _a);
        console.log(answers[result]);
    };
    Display.prototype.CompareSize = function (m) {
        var characteristic = "screen size";
        var currentSize = this.GetArea();
        var mSize = m.GetArea();
        var diff = currentSize - mSize;
        if (diff === 0)
            this.ShowResult(0, characteristic, m);
        if (diff < 0)
            this.ShowResult(-1, characteristic, m);
        if (diff > 0)
            this.ShowResult(1, characteristic, m);
    };
    Display.prototype.CompareSharpness = function (m) {
        var characteristic = "sharpness";
        var diff = this.Ppi - m.Ppi;
        if (diff === 0)
            this.ShowResult(0, characteristic, m);
        if (diff < 0)
            this.ShowResult(-1, characteristic, m);
        if (diff > 0)
            this.ShowResult(1, characteristic, m);
    };
    Display.prototype.CompareWithMonitor = function (m) {
        console.log("Overall comparison of monitors\n\n                 --------------------------------");
        this.CompareSize(m);
        this.CompareSharpness(m);
    };
    return Display;
}());
exports.Display = Display;
