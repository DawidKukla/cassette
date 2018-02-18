"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
var AClass_1 = require("./AClass");
var Test1;
(function (Test1_1) {
    var AClass = AClass_1.AClassModule.AClass;
    var Test1 = /** @class */ (function () {
        function Test1() {
        }
        Test1.prototype.Log = function (msg) {
            var dep = new AClass();
            console.log(msg);
        };
        return Test1;
    }());
    Test1_1.Test1 = Test1;
    new Test1().Log("Test1");
})(Test1 = exports.Test1 || (exports.Test1 = {}));
//# sourceMappingURL=Test1.js.map