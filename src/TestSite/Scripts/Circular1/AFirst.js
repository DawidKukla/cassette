"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
var AFirstModule;
(function (AFirstModule) {
    var AFirst = /** @class */ (function () {
        function AFirst() {
        }
        AFirst.prototype.Log = function (msg) {
            console.log(msg);
        };
        return AFirst;
    }());
    AFirstModule.AFirst = AFirst;
    new AFirst().Log("AFirst");
})(AFirstModule = exports.AFirstModule || (exports.AFirstModule = {}));
//# sourceMappingURL=AFirst.js.map