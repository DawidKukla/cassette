"use strict";
// @reference ~/Scripts
Object.defineProperty(exports, "__esModule", { value: true });
var Test1_1 = require("../Test1/Test1");
var Test2;
(function (Test2_1) {
    var Test2 = /** @class */ (function () {
        function Test2() {
        }
        Test2.prototype.Log = function (msg) {
            console.log(msg);
            var dependency = new Test1_1.Test1.Test1().Log("Test 1 inside Test2");
        };
        return Test2;
    }());
    Test2_1.Test2 = Test2;
    new Test2().Log("Test2");
})(Test2 = exports.Test2 || (exports.Test2 = {}));
//# sourceMappingURL=Test2.js.map