"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lottery = /** @class */ (function () {
    // testWord: string = 'hello'
    function Lottery(testword) {
        this.testword = testword;
    }
    Lottery.prototype.test = function () {
        console.log(this.testword);
    };
    return Lottery;
}());
function run(word) {
    var red = new Lottery(word);
    red.test();
}
exports.run = run;
