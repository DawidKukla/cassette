"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @reference ~/Scripts
var AClassModule;
(function (AClassModule) {
    var AClass = /** @class */ (function () {
        function AClass() {
        }
        AClass.prototype.Log = function (msg) {
            console.log(msg);
        };
        return AClass;
    }());
    AClassModule.AClass = AClass;
    new AClass().Log("AClass");
})(AClassModule = exports.AClassModule || (exports.AClassModule = {}));
//# sourceMappingURL=AClass.js.map