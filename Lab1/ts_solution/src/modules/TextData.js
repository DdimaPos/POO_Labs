"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextData = void 0;
var TextData = /** @class */ (function () {
    function TextData(fileName, text, nOfVowels, nOfCons, nOfLetters, nOfSentences, longestWord) {
        this.fileName = fileName;
        this.text = text;
        this.nOfVowels = nOfVowels;
        this.nOfCons = nOfCons;
        this.nOfLetters = nOfLetters;
        this.nOfSentences = nOfSentences;
        this.longestWord = longestWord;
    }
    TextData.ProcessText = function (fileName, text) {
        var vows = this.CountVows(text);
        var cons = this.CountCons(text);
        var letters = vows + cons;
        var nSent = this.CountSentences(text);
        var longestWord = this.FindLongWord(text);
        return new TextData(fileName, text, vows, cons, letters, nSent, longestWord || "");
    };
    TextData.CountVows = function (text) {
        var vowels = "aeuiohAEUIOH"; //["a", "e", "u", "i", "o", "h", "A", "E", "U", "I", "O", "H"]
        return Array.from(text).filter(function (char) { return vowels.includes(char); }).length;
    };
    TextData.CountCons = function (text) {
        var vowels = ["a", "e", "u", "i", "o", "h", "A", "E", "U", "I", "O", "H"];
        return Array.from(text).filter(function (char) { return !vowels.includes(char); }).length;
    };
    TextData.CountSentences = function (text) {
        return (text.match(/[!?.]/g) || []).length;
    };
    TextData.FindLongWord = function (text) {
        var matches = text.match(/\w+/g);
        if (!matches)
            return null;
        return matches.reduce(function (longest, current) {
            return current.length > longest.length ? current : longest;
        }, "");
    };
    return TextData;
}());
exports.TextData = TextData;
